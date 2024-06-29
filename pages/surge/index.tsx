import Head from "next/head";
import router from "next/router";
import React , {useContext} from "react";
import AppContext from "@/contexts/ AppContextProvider"
import { BiCurrentLocation, BiFile } from "react-icons/bi";

const Surge: React.FC<{}> = () => {
  const { jobTitle, setJobTitle } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Surge</title>
      </Head>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-3/4 w-full">
            <h1 className="text-3xl font-semibold mb-6">System Analyst - Surge</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
                <BiCurrentLocation className='m-1 self-baseline'/>
                Centurion
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Contract
            </h3>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px]">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] mt-10 font-[300]">Position Overview</h1>
            </div>
            <p className="font-TelkomLight">Responsible for developing and maintaining digital automation solutions for both internal and external clients. Defining, designing, developing, testing, documenting, implementation and support of internal business applications. Enhance current platform through integrations throughout the infrastructure to meet the needs of the retail telecom environment.
            </p>
            <br></br>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Requirements</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
              <li>Have a certificate or Diploma in computer science, information systems, or related fields.</li>
              <li>Have 3 to 5 years+ of experience in a similar environment.</li>
              <li>Kanban and Scrum (i.e. use of Target Process).</li>
              <li>End-to-end idea of IT.</li>
            </ul>
            <br></br>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Key Responsibilities</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
            <li>Interpret the business requirement specification and translate it into a detailed system design specification to enable the development of innovative, flexible, and efficient solutions of a business problem.</li>
              <li>Analyse requirements and design an appropriate technical solution with the assistance of our Architects and Developers.</li>
              <li>Produce logical, technical, and functional specifications from business requirements.</li>
              <li>Generate Functional Requirement Specifications (FRS) to be utilized by technical lead and developers for development purposes.</li>
              <li>Interrogate, decipher, and support the Business Requirements Specification (BRS) generation by the business analyst and derive the FRS from it.</li>
            </ul>
          </div>
          <img src="/images/surge.png" alt="Success" className="md:max-w-[200px] w-full mt-5 md:mt-0 md:ml-5"/>
        </div>
        <br></br>
        
        <div className="flex justify-center mt-12 mb-10">
          <div className="w-[214px] h-[50px] px-[30px] py-2.5 bg-[#3D84A8] rounded-[5px] shadow justify-center items-center gap-2.5 inline-flex">
            <div className="pb-1 justify-center items-center flex">
              <button className="text-center text-white text-sm font-normal uppercase tracking-wide"
                                            onClick={() => {
                                              setJobTitle("System Analyst");
                                              router.push("/application");
                                            }}                            >
                Apply 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Surge;
