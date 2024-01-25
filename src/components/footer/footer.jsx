import React from 'react';
import { AiOutlineCopyrightCircle, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillGoogleSquare } from 'react-icons/ai';
import { FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs'
import logo from "../../assets/full_logo2.png";

const Footer = () => {
    return (
        <footer className="bg-black p-4 flex flex-col items-center">
            {/* Logo and Description */}
            <div className="flex flex-col items-center mt-4">
                <img src={logo} alt="BooknTruck Logo" className="w-[10%]" />
                <p className='text-[#999999] text-sm text-[1.2rem] text-center mt-2'>This website was created for fun purposes.<br/> All photos, art, music, and other forms of media belong to their rightful owners.</p>
            </div>

            {/* Contact Details */}
            <div className='text-center mt-4'>
                <h3 className="text-white text-lg font-bold mb-2">Contact Details</h3>
                <div className="text-[#999999] flex items-center justify-center mb-2">
                    <FaMapMarkerAlt className="mr-2" /> USC Talamban Campus, Cebu City, Philippines
                </div>
                <div className="text-[#999999] flex items-center justify-center mb-2">
                    <FaRegEnvelope className="mr-2" /> dcism.sc@gmail.com
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col items-center mt-4">
                <h3 className="text-white text-lg font-bold mb-2">External Links</h3>
                <div className="text-[rgb(42,117,255)] flex items-center space-x-4">
                    <AiFillFacebook className="text-2xl" />
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-4">
                <p className='text-white text-[1rem] flex items-center justify-center mb-2'>
                    Copyright <AiOutlineCopyrightCircle className='mr-2 ml-2' />2024 USC-Computer and Information Sciences Council. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
export default Footer;