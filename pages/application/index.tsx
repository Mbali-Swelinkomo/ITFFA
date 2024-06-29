import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { CardWrapper } from '@/components/Cards';
import { GlobalButton } from "@/components/Elements";
import Head from "next/head";
import SuccessModal from "@/components/Modals/SuccessModal";
import { SuccessAlert } from '@/types';
import Loader from '@/components/Spinner';
import AppContext from "@/contexts/ AppContextProvider"

const Application: React.FC = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPermissionError, setShowPermissionError] = useState(false);
  const [generalConsentChecked, setGeneralConsentChecked] = useState(false);
  const [successAlertData, setSuccessAlertData] = useState<SuccessAlert | null>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [otherDocuments, setOtherDocuments] = useState<File | null>(null);
  const { jobTitle, setJobTitle } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    mobileNumber: "",
    email: "",
    gender: "",
    ethnicity: "",
    generalConsent: true,
  });

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
    setSuccessAlertData(null);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Update the function to submit the application details
  const handleSubmitApplication = async () => {
    try {
      const applicationData = new FormData();
      applicationData.append('name', formData.name || '');
      applicationData.append('surname', formData.surname || '');
      applicationData.append('mobileNumber', formData.mobileNumber || '');
      applicationData.append('email', formData.email || '');
      applicationData.append('ethnicity', formData.ethnicity || '');
      applicationData.append('gender', formData.gender || '');
      applicationData.append('coverLetter', coverLetter || '');
      if (resume) {
        applicationData.append('resume', resume);
      }
      if (otherDocuments) {
        applicationData.append('otherDocuments', otherDocuments);
      }
      applicationData.append('generalConsent', String(generalConsentChecked));
  
      const response = await fetch('http://localhost:8080/submit-application', {
        method: 'POST',
        mode: 'cors', // Set the mode to 'cors' to enable CORS.
        body: applicationData, // Use applicationData instead of formData
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSuccessAlertData({
          title: 'Thank you!',
          message: 'We have received your application. The hiring team will reach out to you with the next steps.',
        });
        setShowModal(true);
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        setSuccessAlertData({
          title: 'Oops',
          message: 'We could not process your request, please try again later.',
        });
        setShowModal(true);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSuccessAlertData({
        title: 'Oops',
        message: 'We could not process your request, please try again later.',
      });
      setShowModal(true);
    }
  };
  
  
  
  
  
  return (
    <>
      <Head>
        <title>Application</title>
      </Head>

      {showModal && successAlertData && (<SuccessModal success={successAlertData} closeModal={closeModal} />)}
      {isLoading && (<Loader />)}

      <div className="container mx-auto px-10 lg:px-52 mt-10 my-auto">
      {/* <div className="container mx-auto mb-5 px-10 min- lg:px-62 mt-14 my-auto"> */}

            <CardWrapper backgroudColor={"white"} borderRadius={"10px"} smPadding={"20px"} lgPadding={"30px"}>

              <div className="container mx-auto">
                <div className="grid grid-cols-1 border-b-2 border-b-lightGrey">
                  <div className="pb-[30px]">
                    <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Submit your Application</h1>
                  </div>
                </div>

                <div className="mt-[20px]">
                  <h2 className="text-[16px] leading-[32px] font-TelkomLight font-[300] line-height-[24px]">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                    <div className="mt-6 md:mb-0">
                      <label className="text-[14px] text-darkGrey font-TelkomLight leading-[22px] font-[300] block mb-2">
                        <span className="p-[2px] h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                        Name
                      </label>
                      <input
                        maxLength={20}
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="py-4 font-TelkomLight px-4 outline-none gap-[10px] text-[14px] line-height-[22px] text-[#000] bg-white mt-[10px] shadow-md rounded-5 w-full"
                        style={{ boxShadow: "0px 0px 55px 0px #0000001A" }}
                        required
                      />
                      
                    </div>
                    <div className="mt-6 md:mb-0">
                      <label className="text-[14px] text-darkGrey font-TelkomLight leading-[22px] font-[300] block mb-2">
                        <span className="p-[2px] font-darkGrey h-2 w-2 rounded-[50%] mr-2 bg-[#3D84A8] inline-block"></span>
                        Surname
                      </label>
                      <input
                        maxLength={20}
                        type="text"
                        placeholder="Enter your surname"
                        value={formData.surname}
                        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                        className="py-4 px-4 font-TelkomLight outline-none gap-[10px] text-[14px] line-height-[22px] text-[#000] bg-white mt-[10px] shadow-md rounded-5 w-full"
                        style={{ boxShadow: "0px 0px 55px 0px #0000001A" }}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                    <div className="mt-6 md:mb-0">
                      <label className="text-[14px] text-darkGrey font-TelkomLight leading-[22px] font-[300] block mb-2">
                        <span className="p-[2px] h-2 w-2 rounded-[50%] mr-2 bg-[#3D84A8] inline-block"></span>
                        Mobile Number
                      </label>
                      <input
                        maxLength={10}
                        type="tel"
                        placeholder="Enter mobile number"
                        inputMode="numeric"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="py-4 font-TelkomLight px-4 outline-none gap-[10px] text-[14px] line-height-[22px] text-[#000] bg-white mt-[10px] shadow-md rounded-5 w-full"
                        style={{ boxShadow: "0px 0px 55px 0px #0000001A" }}
                        required
                      />
                    </div>
                    <div className="mt-6 md:mb-0">
                      <label className="text-[14px] text-darkGrey font-TelkomLight leading-[22px] font-[300] block mb-2">
                        <span className="p-[2px] h-2 w-2 rounded-[50%] mr-2 bg-[#3D84A8] inline-block"></span>
                        Email
                      </label>
                      <input
                        maxLength={20}
                        type="text"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="py-4 px-4 font-TelkomLight outline-none gap-[10px] text-[14px] line-height-[22px] text-[#000] bg-white mt-[10px] shadow-md rounded-5 w-full"
                        style={{ boxShadow: "0px 0px 55px 0px #0000001A" }}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                    <div className="mt-6 md:mb-0">
                      <label className="text-[14px] text-darkGrey font-TelkomLight leading-[22px] font-[300] block mb-2">
                        <span className="p-[2px] h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                        Ethnicity
                      </label>
                      <select
                        id="ethnicity"
                        value={formData.ethnicity}
                        onChange={(e) => setFormData({ ...formData, ethnicity: e.target.value })}
                        className="py-4 font-TelkomLight px-4 outline-none gap-[10px] text-[14px] line-height-[22px] text-[#000] bg-white mt-[10px] shadow-md rounded-5 w-full"
                        style={{ boxShadow: "0px 0px 55px 0px #0000001A", color: formData.ethnicity ? "#000" : "grey" }}
                        required
                      >
                        <option value="" disabled>
                          Please select
                        </option>
                        <option value="White">White</option>
                        <option value="Asian">Asian</option>
                        <option value="African">African</option>
                        <option value="Indian">Indian</option>
                        <option value="Coloured">Coloured</option>
                      </select>
                    </div>
                    <div className="mt-6 md:mb-0">
                      <label className="text-[14px] text-darkGrey font-TelkomLight leading-[22px] font-[300] block mb-2">
                        <span className="p-[2px] font-darkGrey h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                        Gender
                      </label>
                      <select
                        id="gender"
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="py-4 font-TelkomLight px-4 outline-none gap-[10px] text-[14px] line-height-[22px] text-[#000] bg-white mt-[10px] shadow-md rounded-5 w-full"
                        style={{ boxShadow: "0px 0px 55px 0px #0000001A", color: formData.gender ? "#000" : "grey" }}
                        required
                      >
                        <option value="" disabled>
                          Please select
                        </option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                        <option value="NotSay">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>

                  <div className="pb-[30px] mt-8">

                    <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Job Information</h1>
                    <div className="grid grid-cols-1 mb-2  border-b-2 border-b-lightGrey">

                  </div>
                  </div>


                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
            <div className="mt-6 md:mb-0">
                    <label className="text-[14px] text-darkGrey font-TelkomLight leading-[22px] font-[300] block mb-2">
                    <span className="p-[2px] h-2 w-2 rounded-[50%] bg-primaryBlue mr-2 bg-blue-gradient inline-block"></span>
                    Job Title
                    </label>
                    <input
                    type="text"
                    disabled
                    value={jobTitle}
                    onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                    className="py-4 font-TelkomLight px-4 outline-none gap-[10px] text-[14px] line-height-[22px] text-[#000] bg-white mt-[10px] shadow-md rounded-5 w-full"
                    style={{ boxShadow: "0px 0px 55px 0px #0000001A" }}
                    required
                    />
                </div>
            </div>

                <div className="mt-[20px] font-TelkomLight">
                  <h1 className="text-[16px] line-height-[22px] font-TelkomLight font-[300] py-[15px]">
                  <span className="p-[2px] font-darkGrey h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                    Cover Letter
                  </h1>

                  <textarea
                    className="w-full h-40 p-2 border border-gray-300 rounded-md"
                    placeholder="Write your cover letter here..."
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  />

                  <div className="mt-6">
                    <label className="block text-[16px] font-TelkomLight font-[300] mb-2">
                    <span className="p-[2px] font-darkGrey h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                      Upload CV
                    </label>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, setResume)}
                      className="block w-full text-sm text-gray-900 border border-gray-200 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-[16px] font-TelkomLight font-[300] mb-2">
                    <span className="p-[2px] font-darkGrey h-2 w-2 rounded-[50%] bg-[#3D84A8] mr-2 inline-block"></span>
                      Upload Other Documents
                    </label>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, setOtherDocuments)}
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <div className="mb-6 mt-6">
                      <input
                        className="form-check-input mx-1"
                        type="checkbox"
                        id="generalConsent"
                        checked={generalConsentChecked}
                        onChange={() => setGeneralConsentChecked(!generalConsentChecked)}
                      />
                      <label htmlFor="generalConsent" className="text-[14px] font-telkomRegular font-[300]">
                        I agree to the <a href=" " target="_blank" className="text-[#3D84A8]">terms & conditions</a> and <a href=" " target="_blank" className="text-[#3D84A8]">privacy policy</a>.
                      </label>
                    </div>

                    {showPermissionError && (
                      <p className="text-error font-Telkom123 text-[12px]">
                        Please check the checkbox before proceeding.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardWrapper>
          </div>


        <div className="flex justify-center mt-12 mb-10">
                  <div className="w-[214px] h-[50px] px-[30px] py-2.5 bg-[#3D84A8] rounded-[5px] shadow justify-center items-center gap-2.5 inline-flex">
                    <div className="pb-1 justify-center items-center flex">
                      <button className="text-center text-white text-sm font-normal uppercase tracking-wide"
                           onClick={handleSubmitApplication}
                         >
                        SUBMIT APPLICATION
                      </button>
                    </div>
                  </div>
        </div>
    </>
  );
};

export default Application;
