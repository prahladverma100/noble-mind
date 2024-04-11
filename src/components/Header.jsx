"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star } from './Icon'

const Header = () => {
  const [show, setshow] = useState(false);
  const setopen = () => {
    setshow(!show);
    if (show === false) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }

  }


  const Myarray =
    [{ link: '#Home', navlink: 'Home' },
    { link: '#About', navlink: 'About Us' },
    { link: '#Services', navlink: 'Services' },
    { link: '#Choose', navlink: 'Why Choose Us' },
    { link: '#Blogs', navlink: 'Blogs' },
    { link: '#FAQ', navlink: 'FAQ' },
    ];

  return (
    <div className=' bg_img bg-no-repeat min-h-[810px] overflow-hidden bg-center relative' id='home'>
      <Image className=' absolute left-[1%] bottom-0' src='/images/webp/trangel.webp' width={70} height={95} alt="trangel" />
      <div className='  max-w-[1140px] px-3 mx-auto'>
        <div className=' flex items-center justify-between my-[19px]'>
          <div className=' cursor-pointer'>
            <Image src='/images/webp/noble_logo.webp' width={221} height={38} alt="logo" />
          </div>
          <div className='flex items-center gap-3'>
            <ul className={`${show ? "left-0" : "left-[100%]"} flex flex-col lg:flex-row items-center fixed lg:static gap-5 bg-white max-lg:w-full h-screen lg:h-full min-[100%] lg:bg-transparent justify-center lg:justify-normal transition-all duration-300 ease-linear top-0  z-20`}>
              {Myarray.map((event, index) => (
                <li key={index}><a href={event.link} onClick={setopen} className=' text-base font-normal font-Exo hover:text-[#131200] text-[#5A594D]'>{event.navlink}</a></li>
              ))}
              <div className='buttons-wrapper'><button className='py-[14px] px-6 ms-4 rounded-[4px] font-Outfit font-semibold  text-white bg-[#995EEC] click-btn btn_style'>Contact Us</button></div>
            </ul>


            <div onClick={setopen}>
              {show ? (
                <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
                  <span className="bg-[#131200] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
                  <span className="bg-[#131200] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-[56deg] bottom-[8px]"></span>
                </div>
              ) : (
                <div className=" flex lg:hidden flex-col  z-50 justify-between w-[24px] h-[24px] cursor-pointer relative ">
                  <span className="bg-[#5a594d] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-[#5a594d]  w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-[#5a594d] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                </div>
              )}
            </div>
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
        <Image className=' lg:hidden mx-auto' src='/images/webp/hero.webp' width={598} height={580} alt="hero" />

      </div>
    </div>
  )
}

export default Header