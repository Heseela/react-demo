import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CiHeart } from "react-icons/ci";


function Footer() {
  return (
    <div className='bg-black h-5/6'>
    <div className=" text-white grid grid-cols-4 gap-8 px-16 pt-28 mt-40">
    <div className="w-full">
    <div className="text-2xl">About Autoroad</div>
    <div className="text-gray-400 font-medium py-14 text-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
    <div className='flex justify-evenly h-20 w-3/4'>
    <FaTwitter className='text-3xl' />
    <FaFacebook className='text-3xl' />
    <FaInstagram className='text-3xl'/>
    </div>
    </div>


<div className=" w-full">
    <div className="text-2xl">Information</div>
    <div className="text-gray-400 font-medium text-xl py-14">
        <div className="pb-4">About</div>
        <div className="pb-4">Services</div>
        <div className="pb-4">Term and Conditions</div>
        <div className="pb-4">Best Price Guarantee</div>
        <div className="pb-4">Privacy & Cookies Policy</div>
    </div>
</div>

<div className=" w-full">
    <div className="text-2xl">Customer Support</div>
    <div className="text-gray-400 font-medium text-xl py-14">
        <div className="pb-4">FAQ</div>
        <div className="pb-4">Payment Option</div>
        <div className="pb-4">Booking Tips</div>
        <div className="pb-4">How it works</div>
        <div className="pb-4">Contact Us</div>
    </div>
</div>

<div className=" w-full">
    <div className="text-2xl">Have a Questions?</div>
    <div className=" font-medium text-xl py-14">
        <div className='flex'>
    <FaLocationDot className='text-2xl pt-1'/>
        <div className="pb-4 pl-4 text-gray-400">203 Fake St. Mountain View, San Francisco, California, USA</div>
        </div>
        <div className='flex'>
        <IoCall className='text-2xl pt-1'/>
        <div className="pb-4 pl-4 text-gray-400">+977 9847043778</div>
        </div>
        <div className='flex'>
        <MdEmail className='text-2xl pt-1'/>
        <div className="pb-4 pl-4 text-gray-400">info@yourdomain.com</div>
        </div>
    </div>
    </div>
</div>


    <div className='text-gray-300 flex  justify-center pb-8 text-lg'>
    Copyright ©2024 All rights reserved | This template is made with <CiHeart className='text-xl m-1'/>
 by Colorlib
    </div>


    </div>
  )
}

export default Footer