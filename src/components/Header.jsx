"use client";
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import { Star } from './Icon'

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [Show, setShow] = useState(false);
  // if (Show === true) {
  //   document.body.classList.add("max-md:overflow-hidden");
  // }
  // else {
  //   document.body.classList.remove("max-md:overflow-hidden");
  // };
  return (
    <div className=' bg_img bg-no-repeat min-h-[810px] bg-center relative' id='home'>
      <Image className=' absolute left-[1%] bottom-0' src={'/images/png/trangel.png'} width={70} height={95} alt="trangel" />
      <div className='  max-w-[1140px] px-3 mx-auto'>
        <div className=' flex items-center justify-between my-[19px]'>
          <div className=' cursor-pointer'>
            <Image src={'/images/png/noble_logo.png'} width={221} height={38} alt="logo" />
          </div>
          <ul className={`flex  justify-center gap-6 ${Show ? "left-0" : "left-[-100%]"} h-full max-lg:w-full bg-white flex-col lg:flex-row top-0 text-center z-20    items-center duration-500 fixed lg:static`}>
            <li><a href="#home" onClick={() => { setShow(false); setOpen(false) }} className=' text-base font-normal font-Exo hover:text-[#131200] text-[#5A594D]'>Home</a></li>
            <li><a href="#About" onClick={() => { setShow(false); setOpen(false) }} className=' text-base font-normal font-Exo hover:text-[#131200] text-[#5A594D]'>About Us</a></li>
            <li><a href="#Services" onClick={() => { setShow(false); setOpen(false) }} className=' text-base font-normal font-Exo hover:text-[#131200] text-[#5A594D]'>Services</a></li>
            <li><a href="#Choose" onClick={() => { setShow(false); setOpen(false) }} className=' text-base font-normal font-Exo hover:text-[#131200] text-[#5A594D]'>Why Choose Us</a></li>
            <li><a href="#Blogs" onClick={() => { setShow(false); setOpen(false) }} className=' text-base font-normal font-Exo hover:text-[#131200] text-[#5A594D]'>Blogs</a></li>
            <li><a href="#FAQ" onClick={() => { setShow(false); setOpen(false) }} className=' text-base font-normal font-Exo hover:text-[#131200] text-[#5A594D]'>FAQ</a></li>
            <div className='buttons-wrapper'><button className='py-[14px] px-6 ms-4 rounded-[4px] font-Outfit font-semibold  text-white bg-[#995EEC] click-btn btn_style'>Contact Us</button></div>
          </ul>
          <div className="z-30 lg:hidden " onClick={() => setShow(!Show)}>
            <button className="{show?} text-[black]">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
        </div>
        <div className=' flex-row lg:pt-[138px] pt-5' data-aos="fade-right">
          <div className=' lg:w-7/12 w-full'>
            <div className=' flex items-center'>
              <Star />
              <p className=' font-Exo'>AI With Noble Mind</p>
            </div>
            <h1 className=' font-Outfit lg:text-[64px] text-4xl max-w-full lg:leading-[76px] leading-[46px] lg:max-w-[584px] font-light'>Inspiring Innovation, Elevating Solutions–<span className=' font-extrabold leading-[70px]'>Noble Mind"</span></h1>
            <p className=' font-Exo text-base font-normal text-[#131200] max-w-full lg:max-w-[584px] lg:mt-4 mt-0 opcity-[70%]'>At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
          </div>
        </div>
        <Image className=' lg:hidden mx-auto' src={'/images/png/hero.png'} width={598} height={580} alt="hero" />
      </div>
    </div>
  )
}

export default Header