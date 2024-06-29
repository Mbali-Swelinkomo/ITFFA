import Head from "next/head";
import router from "next/router";
import { BiCurrentLocation, BiFile } from "react-icons/bi";
import React , {useContext} from "react";
import AppContext from "@/contexts/ AppContextProvider"

const Slack: React.FC<{}> = () => {
  const { jobTitle, setJobTitle } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Slack</title>
      </Head>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-3/4 w-full">
            <h1 className="text-3xl font-semibold mb-6">Junior Project Manager - Slack Insure</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
                <BiCurrentLocation className='m-1 self-baseline'/>
                Johannesburg
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Contract
            </h3>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px]">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] mt-10 font-[300]">Position Overview</h1>
            </div>
            <p className="font-TelkomLight">The onsite junior project manager works closely with our senior management team to ensure the successful delivery of high-quality software development projects.
              This role entails coordinating with both internal and external stakeholders, managing project documentation, monitoring progress and providing ad hoc support, wherever necessary.
            </p>
            <br></br>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Requirements</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
              <li>Minimum 1 year of work experience; background in tech is advantageous.</li>
              <li>Minimum bachelors degree.</li>
              <li>Strong organizational skills, capable of multitasking and enjoys problem solving (essential).</li>
              <li>Clear verbal and written communication abilities.</li>
              <li>Generally intrigued and eager to learn more about technology.</li>
              <li>Proficiency in MS Office suite (Word, Excel, PowerPoint).</li>
            </ul>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Key Responsibilities</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
              <li>Gather information from the technical team, track progress of relevant projects and provide updates to stakeholders.</li>
              <li>Ensure adherence to deadlines and inject urgency when necessary.</li>
              <li>Understanding product and system specification documents to guide development teams.</li>
            </ul>
          </div>
          <img src="/images/company1.jpg" alt="Success" className="md:max-w-[200px] w-full mt-5 md:mt-0 md:ml-5"/>
        </div>
      </div>
      <br></br>

      <div className="flex justify-center mt-12 mb-10">
          <div className="w-[214px] h-[50px] px-[30px] py-2.5 bg-[#3D84A8] rounded-[5px] shadow justify-center items-center gap-2.5 inline-flex">
            <div className="pb-1 justify-center items-center flex">
              <button className="text-center text-white text-sm font-normal uppercase tracking-wide"
                                            onClick={() => {
                                              setJobTitle("Junior Project Manager");
                                              router.push("/application");
                                            }}                                          >
                Apply 
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Slack;
