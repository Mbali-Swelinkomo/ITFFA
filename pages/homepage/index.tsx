import router, { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { BiSolidCalendar, BiCurrentLocation, BiFile} from 'react-icons/bi';
import Head from "next/head";
import AppContext from "@/contexts/ AppContextProvider"


const CourseCard: React.FC<{image: string, date: string, location: string, type: string, title: string, salary: string, description: string}> = ({ image, date, location, type, title, salary, description }) => {
  return (
    <div className="courses-thumb courses-thumb-secondary p-5 rounded-2xl shadow-lg bg-white">
      <div className="courses-top">
        <div className="courses-image">
          <Image src={image} alt="Course" width={720} height={480} className="img-responsive" />
        </div>
        <div className="courses-date flex justify-between text-gray-600 text-sm mt-3">
        <BiSolidCalendar className='m-1 self-baseline'/>
          <span title="Posted on"><i className="fa fa-calendar mr-1 text-lightGrey"></i> {date}</span>
        <BiCurrentLocation className='m-1 self-baseline'/>
          <span title="Location"><i className="fa fa-map-marker mr-1"></i> {location}</span>
        <BiFile className='m-1 self-baseline'/>
          <span title="Type"><i className="fa fa-file mr-1"></i> {type}</span>
        </div>
      </div>
      
      <div className="courses-detail mt-4">
        <h3 className="font-TelkomLight text-[18px] mb-3"><a href="job-details.html">{title}</a></h3>
        <p className="lead text-[16px] mb-2"><strong>{salary}</strong></p>
        <p className="font-TelkomLight text-[14px]">{description}</p>
      </div>
      <div className="courses-info mt-4">
      <div className="grid grid-cols-1 border-b-2 border-b-lightGrey mb-5"></div>
        <button 
          className="section-btn btn btn-primary btn-block text-white bg-[#3D84A8] font-TelkomLight py-2 px-4 rounded"
          onClick={() => router.push("/browse")}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const HomePageMainSection: React.FC<{}> = () => {
  const router = useRouter();
  const { user, setUser } = useContext(AppContext);
  console.log(user)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user", {
          credentials: 'include' // Ensure cookies are included in the request
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data.user); // Assuming the API returns the user data
        } else {
          console.error("Failed to fetch user:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    

    fetchUser();
  }, [setUser]);
  
  return (
    <> 

      <Head>
        <title>JobConnect</title>
      </Head>

      <div style={{ backgroundColor: 'white' }}>
      <div className="flext lg:h-[600px] w-full bg-[url('/images/homepageBanner.jpg')] lg:bg-[url('/images/homepageBanner.jpg')] px-[0px] lg:px-[35px] pt-[40px] lg:py-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
        <div className="text-center mx-auto my-[80px] lg:pt-[120px] lg:pl-20">
          <h2 className="font-TelkomLight font-[500] text-[22px] lg:text-[60px] leading-[24px] lg:leading-[52px] text-white font-semibold mb-5">
            Welcome to JobConnect
          </h2>
          <p className="mb-2 text-[14px] lg:text-[18px] text-white font-TelkomLight">
            A Dynamic Job Site for Job Seekers and Employers!
          </p>
          <div>
            <button
              className={`text-[14px] my-[30px] leading-[20px] font-[400] min-w-[200px] shadow-[0px -5px 27px rgba(0, 0, 0, 0.05)]
                py-[10px] px-[30px] rounded-[5px] text-center border-2 border-[#3D84A8]
                text-white font-TelkomLight bg-[#3D84A8]`}
              onClick={() => router.push("/browse")}
            >
              Browse Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
                
        <div className="container text-center mx-auto px-10 lg:px-20 mt-10 mb-20 py-10 lg:mb-10 lg:py-15" style={{ minHeight: 'lg:400px' }}>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-[20px] leading-[22px] font-TelkomLight font-[500] lg:text-[40px] mb-10 font-semibold">About Us</p>
          </div>
          <p className="lg:mt-10 text-[14px] lg:text-[18px] font-TelkomLight mb-2">
            JobConnect aims to bridge the gap between job seekers and employers by providing a dynamic, efficient, and secure web-based platform. 
            By focusing on usability, security, and performance, JobConnect will create a seamless job application experience for users while enabling employers 
            to effectively manage their job postings and applications.
            <br></br>
            <br></br>
          </p>
        </div>
      </div>

      <div className="container text-center mx-auto px-8 lg:px-20  mb-15 py-5 lg:py-10">
        <p className="text-center text-[20px] leading-[22px] font-TelkomLight font-[500] lg:text-[40px] mb-5 font-semibold">Featured Jobs</p>
        <p className="lg:mt-10 text-[14px] lg:text-[18px] font-TelkomLight mb-2"> Below are some of the job listings we have available. Explore and see if you can find the perfect fit for you. </p>
        <br></br>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          <CourseCard 
            image="/images/company1.jpg" 
            date="15-06-2020" 
            location="Johannesburg" 
            type="Contract" 
            title="Junior Project Manager" 
            salary="R60 000" 
            description="Insurance / Project Manager Jobs in South Africa"
          />
          <CourseCard 
            image="/images/company2.jpg" 
            date="15-06-2020" 
            location="Midrand" 
            type="Permanent" 
            title="Front-End Developer" 
            salary="R70 000" 
            description="Telecommunications / Developer Jobs in South Africa"
          />
          <CourseCard 
            image="/images/Bank.png" 
            date="15-06-2020" 
            location="Cape Town" 
            type="Contract" 
            title="Java Developer" 
            salary="R80 000" 
            description="Banking / Developer Jobs in South Africa"
          />
        </div>
      </div>
    </>
  );
};

export default HomePageMainSection;
