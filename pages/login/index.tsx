import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "@/contexts/ AppContextProvider"
import GenericModal from "@/components/Modals/GenericModal";
import Loader from '@/components/Spinner';
import Head from "next/head";
import { GenericAlert } from "@/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [genericAlertData, setGenericAlertData] = useState<GenericAlert | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AppContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // New state for toggling password visibility
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);
        router.push("/homepage");
      } else {
        setGenericAlertData({
          title: 'Invalid login credentials',
          message: 'Please ensure that you have entered the correct email and (or) password.',
        });
        setShowModal(true);
      }
    } catch (error) {
      setGenericAlertData({
        title: 'Error logging in',
        message: 'An unexpected error occurred. Please try again.',
      });
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      {showModal && genericAlertData && (
        <GenericModal generic={genericAlertData} closeModal={closeModal} />
      )}

      {isLoading && <Loader />}

      <div className="flex items-center justify-center min-h-screen font-TelkomLight bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="flex justify-center">
            <img src="/images/logo1.png" alt="Logo" className="w-50 h-50" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Login
          </h2>
          <p className="text-center text-gray-600">Hi, Welcome back 👋</p>
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center"></div>
          </div>
          <div className="mt-6 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                <span className="p-[2px] h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                <span className="p-[2px] h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"} // Toggle input type
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              {!isPasswordValid && (
                <p className="mt-2 text-sm text-[#FF5733]">Password must be at least 8 characters long and include a number and a special character.</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                onClick={handleLogin}
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#3D84A8] border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm font-TelkomLight text-gray-600">
              Not registered yet?{" "}
              <a href="/create-account" className="font-medium text-indigo-600 hover:text-indigo-500">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
