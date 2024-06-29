import Image from "next/image";
import Link from "next/link";
import React from "react";

const topMenu = [
    {
        label: "Chat to us online",
        url: "/",
        iconSrc: "/images/icons/chat-icon.png"
    },
    {
        label: "Self service",
        url: "/",
        iconSrc: "/images/icons/self-service-icon.png"
    },
    {
        label: "Need help troubleshoot?",
        url: "/",
        iconSrc: "/images/icons/get-help-icon.png"
    },
    {
        label: "Check coverage",
        url: "/",
        iconSrc: "/images/icons/coverage-icon.png"
    },
    {
        label: "Find a store",
        url: "/",
        iconSrc: "/images/icons/store-icon.png"
    }
];

const bottomMenu = ["Home",  "PAIA", "Terms & Conditions", "POPI"]

const Footer: React.FC<{}> = () => {

    return(
        <>
            <div className="bg-[#3D84A8] bg-footer-top-radial-gradient py-10">
                <div className="container mx-auto px-10">
                    <div className="grid grid-cols-1 gap-4">
                    <h1 className="text-2xl font-bold text-white">JobConnect</h1>

                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-8 text-white">
                        <ul className="flex flex-col md:flex-row">
                            {topMenu.map((item, index) =>(
                                <li  className="mx-0 mb-3 first:ml-0 md:mx-6 md:mb-0"  key={index}>
                                    <Link href={item.url}>
                                    <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <Image 
                                            src={item.iconSrc}
                                            alt={item.label}
                                            width="23"
                                            height="23"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-Telkom123-Bold font-[600] text-[14px] leading-[14px]">{item.label}</p>
                                    </div>
                                    </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h3 className="font-TelkomLight">Copyright © 2024 JobConnect</h3>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;