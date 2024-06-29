import Head from "next/head";
import router from "next/router";
import React , {useContext} from "react";
import { BiCurrentLocation, BiFile } from "react-icons/bi";
import AppContext from "@/contexts/ AppContextProvider"


const Slack: React.FC<{}> = () => {
  const { jobTitle, setJobTitle } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>ABC Bank</title>
      </Head>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-3/4 w-full">
            <h1 className="text-3xl font-semibold mb-6">Java Developer  - ABC Bank</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
                <BiCurrentLocation className='m-1 self-baseline'/>
                Cape Town
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Contract
            </h3>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px]">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] mt-10 font-[300]">Position Overview</h1>
            </div>
            <p className="font-TelkomLight">To provide IT expertise and support in the design and configuring of new systems and enhancements to existing systems in accordance with agreed framework of programming standards.
                To produce logical and technical specifications from functional specifications and to write the code for small to medium applications.
            </p>
            <br></br>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Requirements</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
              <li>At least 5 years of development experience.</li>
              <li>Minimum bachelors degree in Computer Science or any IT related qualification.</li>
              <li>Spring, or NetBeans, or Maven, or Eclipse (advantageous).</li>
              <li>WebSphere experienece advantageous.</li>
              <li>JavaScript, CSS, HTML.</li>
              <li>Cloud experience - Azure or AWS.</li>
            </ul>
            <br></br>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Key Responsibilities</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
              <li>Increase operational efficiency and suggest solutions to enhance cost effectiveness.</li>
              <li>Produce program specifications and implement system enhancements by addressing specific business needs and resolving queries.</li>
              <li>Code, compile, test and implement applications in compliance with the Systems Development Life Cycle (SDLC). Support development environments.</li>
              <li>Assess, identify and mitigate potential risks within the IT programming environment by complying with technology business policy and process requirements to ensure operational performance.</li>
              <li>Monitor systems post change and pro-actively do performance analysis to ensure there is no system failure due to capacity.</li>
            </ul>
          </div>
          <img src="/images/Bank.png" alt="Success" className="md:max-w-[200px] w-full mt-5 md:mt-0 md:ml-5"/>
        </div>
        <br></br>
        
        <div className="flex justify-center mt-12 mb-10">
          <div className="w-[214px] h-[50px] px-[30px] py-2.5 bg-[#3D84A8] rounded-[5px] shadow justify-center items-center gap-2.5 inline-flex">
            <div className="pb-1 justify-center items-center flex">
              <button className="text-center text-white text-sm font-normal uppercase tracking-wide"
                                            onClick={() => {
                                              setJobTitle("Java Developer");
                                              router.push("/application");
                                            }}
                                          >
                Apply 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slack;
