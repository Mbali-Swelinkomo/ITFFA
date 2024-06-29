import Head from "next/head";
import React from "react";
import { BiCurrentLocation, BiFile } from "react-icons/bi";
import Image from "next/image";
import router from "next/router";

const BrowseJobs: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Browse Jobs</title>
      </Head>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 relative flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl font-semibold mb-6">Junior Project Manager - Slack Insure</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
                <BiCurrentLocation className='m-1 self-baseline'/>
                Johannesburg
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Contract
            </h3>
          </div>
          <img src="/images/company1.jpg" alt="Success" className="max-w-full md:max-w-[200px] ml-0 md:ml-5 mt-5 md:mt-0"/>
          <p className="font-TelkomLight">We are seeking a dedicated Project Manager to oversee on-site installations and manage technical operations efficiently. The ideal ...</p>                              
          <div>
            <button
              className={`text-[16px] my-[30px] leading-[20px] mt-5 font-[400] min-w-[200px] shadow-[0px -5px 27px rgba(0, 0, 0, 0.05)]
                py-[10px] px-[30px] rounded-[5px] text-center border-2 border-[#3D84A8]
                text-white font-TelkomLight bg-[#3D84A8]`}
              onClick={() => router.push("/slack")}>
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 relative flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl font-semibold mb-6">Java Developer - ABC Bank</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
              <BiCurrentLocation className='m-1 self-baseline'/>
              Cape Town
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Contract
            </h3>
          </div>
          <img src="/images/Bank.png" alt="company3" className="max-w-full md:max-w-[300px] ml-0 md:ml-5 mt-5 md:mt-0"/>
          <p className="font-TelkomLight">Looking for a Java Developer to join an exciting team of who have a strong passion for development! A continuously growing company ...</p> 
          <div>
            <button
              className={`text-[16px] my-[30px] leading-[20px] mt-5 font-[400] min-w-[200px] shadow-[0px -5px 27px rgba(0, 0, 0, 0.05)]
                py-[10px] px-[30px] rounded-[5px] text-center border-2 border-[#3D84A8]
                text-white font-TelkomLight bg-[#3D84A8]`}
              onClick={() => router.push("/abc")}>
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 relative flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl font-semibold mb-6">System Analyst - Surge</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
              <BiCurrentLocation className='m-1 self-baseline'/>
              Centurion
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Contract
            </h3>
          </div>
          <img src="/images/surge.png" alt="company3" className="max-w-full md:max-w-[250px] ml-0 md:ml-5 mt-5 md:mt-0"/>
          <p className="font-TelkomLight mt-2"> We are seeking a dynamic individual to fill the role of Systems Audit Analyst and become an integral part of a dedicated team. As our ...</p>
          <div>
            <button
              className={`text-[16px] my-[30px] leading-[20px] mt-5 font-[400] min-w-[200px] shadow-[0px -5px 27px rgba(0, 0, 0, 0.05)]
                py-[10px] px-[30px] rounded-[5px] text-center border-2 border-[#3D84A8]
                text-white font-TelkomLight bg-[#3D84A8]`}
              onClick={() => router.push("/surge")}>
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 relative flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl font-semibold mb-6">Front-End Developer - Nubis</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
              <BiCurrentLocation className='m-1 self-baseline'/>
              Midrand
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Permanent
            </h3>
          </div>
          <img src="/images/company2.jpg" alt="company3" className="max-w-full md:max-w-[200px] ml-0 md:ml-5 mt-5 md:mt-0" />
          <p className="font-TelkomLight"> Forming part of a global team you will be involved in the front-end development of a global telematics platform with a channel ...</p>
          <div>
            <button
              className={`text-[16px] my-[30px] leading-[20px] mt-5 font-[400] min-w-[200px] shadow-[0px -5px 27px rgba(0, 0, 0, 0.05)]
                py-[10px] px-[30px] rounded-[5px] text-center border-2 border-[#3D84A8]
                text-white font-TelkomLight bg-[#3D84A8]`}
              onClick={() => router.push("/nubis")}>
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 relative flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl font-semibold mb-6">Web Developer - iFrame</h1>
            <h2 className="text-lg font-TelkomLight mb-3 flex">
              <BiCurrentLocation className='m-1 self-baseline'/>
              Centurion
            </h2>
            <h3 className="font-TelkomLight py-5 flex">
                <BiFile className='m-1 self-baseline'/>
                Job Type: Permanent
            </h3>
          </div>
          <img src="/images/iFrame.png" alt="company3" className="max-w-full md:max-w-[250px] ml-0 md:ml-5 mt-5 md:mt-0" />
          <p className="font-TelkomLight">As a Web Developer, you would be involved in supporting and maintaining our dynamic, intelligent web-based system. You will be part ... </p>                                 
          <div>
              <button
                className={`text-[16px] my-[30px] leading-[20px] mt-5 font-[400] min-w-[200px] shadow-[0px -5px 27px rgba(0, 0, 0, 0.05)]
                  py-[10px] px-[30px] rounded-[5px] text-center border-2 border-[#3D84A8]
                  text-white font-TelkomLight bg-[#3D84A8]`}
                onClick={() => router.push("/iFrame")}>
                View Details
              </button>
            </div>
        </div>
      </div>

      <br></br>
      <br></br>
    </>
  );
};

export default BrowseJobs;
