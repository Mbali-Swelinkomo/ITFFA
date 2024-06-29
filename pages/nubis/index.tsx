import Head from "next/head";
import router from "next/router";
import { BiCurrentLocation, BiFile } from "react-icons/bi";
import React , {useContext} from "react";
import AppContext from "@/contexts/ AppContextProvider"

const Nubis: React.FC<{}> = () => {
  const { jobTitle, setJobTitle } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Nubis</title>
      </Head>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-3/4 w-full">
            <h1 className="text-3xl font-semibold mb-6">Front-End Developer - Nubis</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
                <BiCurrentLocation className='m-1 self-baseline'/>
                Midrand
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Permanent
            </h3>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px]">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] mt-10 font-[300]">Position Overview</h1>
            </div>
            <p className="font-TelkomLight">The Font-End Developer (React) will play a critical role in designing, building, and maintaining our high-performance front-end suite of SaaS products. This role requires a strong understanding of React. The successful candidate will work closely with product managers, designers, data scientists, and other engineers to ensure we deliver the right value at the right time. They will excel in an agile development environment and drive continuous improvement and adoption of best practices.
            </p>
            <br></br>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Requirements</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
              <li>Bachelor’s degree in computer science, Engineering, or a related field (or equivalent work experience).</li>
              <li>Hands on experience with building React applications.</li>
              <li>Experience working in accordance with agile and XP principles.</li>
              <li>Excellent communication and teamwork skills.</li>
              <li>Strong problem solving and analytical skills.</li>
            </ul>
            <br></br>
            <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px] mt-5">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Key Responsibilities</h1>
            </div>
            <ul className="list-disc pl-5 font-TelkomLight">
            <li>Design, develop, and maintain high-quality frontend systems.</li>
              <li>Work with a cross functional team to deliver projects on time with quality deliverables.</li>
              <li>Participate in all phases of the software development lifecycle, from requirements gathering to testing, production deployment and evolution.</li>
              <li>Stay up to date on the latest technologies and trends in the software industry.</li>
              <li>Work with engineers to design and implement front end solutions.</li>
            </ul>
          </div>
          <img src="/images/company2.jpg" alt="Success" className="md:max-w-[200px] w-full mt-5 md:mt-0 md:ml-5"/>
        </div>
        <br></br>
        
        <div className="flex justify-center mt-12 mb-10">
          <div className="w-[214px] h-[50px] px-[30px] py-2.5 bg-[#3D84A8] rounded-[5px] shadow justify-center items-center gap-2.5 inline-flex">
            <div className="pb-1 justify-center items-center flex">
              <button className="text-center text-white text-sm font-normal uppercase tracking-wide"
                                            onClick={() => {
                                              setJobTitle("Front-End Developer");
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

export default Nubis;
