import Head from "next/head";
import router from "next/router";
import React , {useContext} from "react";
import { BiCurrentLocation, BiFile } from "react-icons/bi";
import AppContext from "@/contexts/ AppContextProvider"

const iFrame: React.FC<{}> = () => {
  const { jobTitle, setJobTitle } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>iFrame</title>
      </Head>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-3/4 w-full">
            <h1 className="text-3xl font-semibold mb-6">Web Developer - iFrame</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
                <BiCurrentLocation className='m-1 self-baseline'/>
                Centurion
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Permanent
            </h3>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px]">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] mt-10 font-[300]">Position Overview</h1>
            </div>
            <p className="font-TelkomLight">We are seeking a skilled Website Developer specialized in WordPress and Shopify platforms. This role demands a blend of technical proficiency and creativity to manage both ongoing maintenance and the construction of new websites. The ideal candidate will have a proven track record of developing high-performing websites that are both visually appealing and functionally robust.
            </p>
            <br></br>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Requirements</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
              <li>Strong expertise in WordPress and Shopify platforms.</li>
              <li>Proficient in HTML, CSS, JavaScript, and PHP.</li>
              <li>Excellent problem-solving skills and attention to detail.</li>
              <li>Strong communication skills and ability to work independently.</li>
              <li>Experience in managing multiple projects in a dynamic, fast-paced environment.</li>
            </ul>
            <br></br>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Key Responsibilities</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
              <li>Design, develop, and maintain websites using WordPress and Shopify.</li>
              <li>Ensure all platforms are responsive and comply with web standards.</li>
              <li>Work independently on projects from conception to completion.</li>
              <li>Troubleshoot and resolve website issues in a timely and accurate manner.</li>
              <li>Collaborate with the marketing team to align website design with overall brand strategy.</li>
              <li>Provide updates and maintain regular communication with the team and stakeholders.</li>
            </ul>
          </div>
          <img src="/images/iFrame.png" alt="Success" className="md:max-w-[200px] w-full mt-5 md:mt-0 md:ml-5"/>
        </div>
        <br></br>
        
        <div className="flex justify-center mt-12 mb-10">
          <div className="w-[214px] h-[50px] px-[30px] py-2.5 bg-[#3D84A8] rounded-[5px] shadow justify-center items-center gap-2.5 inline-flex">
            <div className="pb-1 justify-center items-center flex">
              <button className="text-center text-white text-sm font-normal uppercase tracking-wide"
                                            onClick={() => {
                                              setJobTitle("Web Developer");
                                              router.push("/application");
                                            }}                                          >
                Apply 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default iFrame;
