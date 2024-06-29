import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Spinner";
import Head from "next/head";
import { AppContext } from "@/contexts/ AppContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SuccessModal from "@/components/Modals/SuccessModal";
import { SuccessAlert } from '@/types';


const CreateAccount: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // New state for toggling password visibility
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [successAlertData, setSuccessAlertData] = useState<SuccessAlert | null>(null);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const { setUser } = useContext(AppContext);

  const closeModal = () => {
    setShowModal(false);
    setSuccessAlertData(null);
  };

  const validatePassword = (pw: string) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(pw);
  };

  const validateEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleCreateAccount = async () => {
    if (!validatePassword(password)) {
      setIsPasswordValid(false);
      return;
    }

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      setEmailErrorMessage(
        "Invalid email format. Please enter a valid email address."
      );
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, email, password }),
      });

      if (response.status === 201) {
        // Account created successfully
        const user = await response.json();
        setUser(user); // Assuming setUser function updates the context with the user
        router.push("/homepage"); // Redirect to homepage
      } else {
        setSuccessAlertData({
          title: 'Oops!',
          message: 'Error creating account, please try again later',
        });
        setShowModal(true);        
        console.error("Failed to create account:", await response.text());
      }
    } catch (error) {
      console.error("Error creating account:", error);
      setSuccessAlertData({
        title: 'Oops!',
        message: 'Error creating account, please try again later',
      });
      setShowModal(true);   
        } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>

      {showModal && successAlertData && (<SuccessModal success={successAlertData} closeModal={closeModal} />)}
      {isLoading && <Loader />}

      <div className="flex items-center justify-center min-h-screen font-TelkomLight bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="flex justify-center">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="w-50 h-50"
            />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Create an account with us! 😊
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                <span className="p-[2px] h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                First Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                <span className="p-[2px] h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                Surname
              </label>
              <input
                id="surname"
                name="surname"
                type="text"
                autoComplete="surname"
                required
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your surname"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailValid(true);
                }}
                className={`block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border ${
                  isEmailValid
                    ? "border-gray-300"
                    : "border-red-500"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Enter your email"
              />
              {!isEmailValid && (
                <p className="mt-2 text-sm text-[#FF5733]">
                  {emailErrorMessage}
                </p>
              )}
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
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                onClick={handleCreateAccount}
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#3D84A8] border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
