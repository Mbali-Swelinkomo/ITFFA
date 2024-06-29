import React from "react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";

interface CareerAdviceItemProps {
  imageSrc: string;
  title:any;
  description: string;
  articleLink: string;
}

const CareerAdviceItem: React.FC<CareerAdviceItemProps> = ({ imageSrc, title, description, articleLink }) => {
  const handleButtonClick = () => {
    window.location.href = articleLink;
  };


  return (
    <div className="p-4">
      <Image src={imageSrc} alt="Career Advice" width={300} height={200} className="rounded-lg" />
      <p className="font-TelkomLight font-bold mt-4 text-[18px]">{title}</p>
      <p className="font-TelkomLight font-xs mb-5">{description}</p>
      <button
        onClick={handleButtonClick}
        className="bg-[#3D84A8] font-TelkomLight text-white h-[40px] w-[100px] px-3 py-1 rounded text-sm"
        >
        Read More
        </button>
    </div>
  );
};

export default CareerAdviceItem;



