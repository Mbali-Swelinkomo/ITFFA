import Head from "next/head";
import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import Image from "next/image";
import CareerAdviceItem from "@/components/CareerAdviceItem";
import { title } from "process";


const CareerAdvice: React.FC<{}> = () => {
  const articles = [
    {
      imageSrc: "/images/article1.avif",
      title:"When it’s time to make a career move",
      description: "Deciding to switch careers can be scary, but knowing when it’s time for a change and how to do it smoothly can make it a whole […]",
      articleLink: "https://www.pnet.co.za/blog/when-its-time-to-make-a-career-move/"
    },
    {
      imageSrc: "/images/article2.avif",
      title: "How to secure your first promotion" ,
      description: "Getting your first promotion is a big deal in your career. It shows that your hard work and dedication are paying off and you’re on the […]",
      articleLink: "https://www.pnet.co.za/blog/how-to-secure-your-first-promotion/"
    },
    {
      imageSrc: "/images/article3.avif",
      title: "Mastering the Art of The Interview",
      description: "Interviews can be stressful, but with good prep and the right attitude, mastering the art of the interview is possible. In fact, an interview […]",
      articleLink: "https://www.pnet.co.za/blog/tips-for-interview-success/"
    },
    {
      imageSrc: "/images/article4.avif",
      title: "Six ‘dos & don’ts’ during a job interview",
      description: "A job interview is a crucial step in the hiring process that can determine your career path. It’s your chance to showcase your skills, experience and […]",
      articleLink: "https://www.pnet.co.za/blog/six-dos-and-donts-during-a-job-interview/"
    },
    {
      imageSrc: "/images/article5.avif",
      title: "JobConnect CV Template",
      description: "Copy and the text below and paste it in a Microsoft Word doc to get started! CURRICULUM VITAE [Your Name] [Professional Title] [Phone Number] [Email Address] […]",
      articleLink: "/articles/balancing-work-and-life-tips-for-success"
    },
    {
      imageSrc: "/images/article6.avif",
      title: "How to Prioritise Mental Health During Your Job Search",
      description: "Job hunting can be an exciting time, full of new possibilities and potential opportunities. It can however be a stressful and draining experience, especially if it […]",
      articleLink: "https://www.pnet.co.za/blog/prioritise-mental-health-during-your-job-search/"
    },
  ];


  return (
    <>
      <Head>
        <title>Browse Jobs</title>
      </Head>

      <div className="container mx-auto mb-5 px-10 min-lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 relative">
          <div className="border-b-2 mb-5 border-b-lightGrey pb-[30px]">
            <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Get Career Advice</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <CareerAdviceItem
                key={index}
                imageSrc={article.imageSrc}
                title={article.title}
                description={article.description}
                articleLink={article.articleLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerAdvice
