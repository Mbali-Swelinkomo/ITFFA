import {SuccessAlert} from '@/types'
import React, { useContext, useState } from "react";
import Image from "next/image";
import router from "next/router";



interface Props {
    success: SuccessAlert;
    closeModal: () => void;
}
const AlertModal: React.FC<Props> = ({ success, closeModal }) => {

    const [showAlertModal, setAlertModal] = useState(true);

    const handleModalDownloadAppClose = () => {
        closeModal()
        router.push("/homepage") 
    };

    return (
        <>
            {showAlertModal ? (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[99]
                 bg-primary bg-opacity-75 h-screen w-screen top-0 left-0"
                    >
                        <div
                            className="relative min-h-[200px] flex flex-col mx-2 transform overflow-hidden rounded-[10px] px-0 lg:px-0 p-[15px] pb-0 lg:pb-0 lg:p-[30px]
                   bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[700px]"
                        >
                            <Image
                                src="/images/icons/modal-close-icon.png"
                                width="14"
                                height="14"
                                alt="Close"
                                className="ml-auto cursor-pointer absolute right-4 top-4"
                                onClick={handleModalDownloadAppClose}
                            />
                            <div className="bg-white  p-[30px]">
                                <div className="container">
                                    <div className="grid grid-cols-1 mb-6">
                                        <div>
                                            <h1
                                                className="text-primary font-TelkomLight text-center text-[20px]
                                    leading-[22px] md:text-[32px] md:leading-[36px]"
                                            >
                                                {success.title}
                                            </h1>
                                            <p className="font-TelkomLight text-primary text-center mt-5 md:mt-8">
                                                {success.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto modal-footer">
                                <div className="container mx-auto">
                                    <div className="grid grid-cols-1">
                                        <div className="text-center">
                                            <button
                                                onClick={handleModalDownloadAppClose}
                                                className={`text-[14px] leading-[20px] font-[400] min-w-[200px] mb-10 shadow-[0px -5px 27px rgba(0, 0, 0, 0.05)] 
                                                py-[10px] px-[30px] rounded-[5px] text-center border-2 border-[#3D84A8]
                                                text-white font-TelkomLight bg-[#3D84A8]`}
                                            >
                                                Dismiss
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default AlertModal;
