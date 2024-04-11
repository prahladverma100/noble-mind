"use client"
import React from 'react'
import { Star } from './Icon'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ChooseUs = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        // autoplay: true,
        // autoplaySpeed: 1500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1116,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className=' relative' id='Choose'>
            <Image className=' absolute top-[12%] left-[1%] hidden lg:block' src={'/images/webp/trangel.webp'} height={95} width={70} alt="trangel" />
            <Image className=' absolute bottom-[8%] right-[1%] lg:block hidden' src={'/images/webp/trangel.webp'} height={95} width={70} alt="trangel" />
            <div className=' mx-auto max-w-[1140px]'>
                <div className=' flex pb-2 justify-center lg:pt-36 pt-5' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">
                    <Star />
                    <p className=' font-Exo font-normal text-base text-[#131200]'>Why Choose Us</p>
                </div>
                <h3 className=' text-center font-light font-Outfit text-3xl md:text-4xl lg:text-5xl text-[#000] lg:pb-[52px] pb-5' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Driving Innovation & <span className=' font-semibold block'> Transforming Industries</span></h3>
                <Slider {...settings}>
                    <div className='flex justify-center' data-aos="fade-right">
                        <div className=' border-[1px] hov_active rounded-[12px] w-[364px] h-full min-h-[208px] px-[18px] py-[18px] border-[#EEDDFB] '>
                            <Image src={'/images/webp/two.webp'} width={36} height={36} alt="two" />
                            <p className=' font-Outfit text-xl font-normal pt-[11px]'>Customer-Centric</p>
                            <p className=' max-w-[297px] text-[#131200] opacity-[70%] font-Exo text-base font-normal'>Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className=' border-[1px] hov_active rounded-[12px] w-[364px] h-full min-h-[200px] px-[18px] py-[15px] border-[#EEDDFB] '>
                            <Image src={'/images/webp/three.webp'} width={36} height={36} alt="three" />
                            <p className=' font-Outfit text-xl font-normal pt-[11px]'>Customer-Centric</p>
                            <p className=' max-w-[297px] text-[#131200] opacity-[70%] font-Exo text-base font-normal'>Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family.</p>
                        </div>
                    </div>
                    <div className='flex justify-center' data-aos="fade-right">
                        <div className=' border-[1px] hov_active rounded-[12px] w-[364px] h-full min-h-[208px] px-[18px] py-[18px] border-[#EEDDFB] '>
                            <Image src={'/images/webp/one.webp'} width={36} height={36} alt="one" />
                            <p className=' font-Outfit text-xl font-normal pt-[11px]'>Customer-Centric</p>
                            <p className=' max-w-[297px]'>Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className=' border-[1px] hov_active rounded-[12px] h-full min-h-[208px] w-[364px] px-[18px] py-[18px] border-[#EEDDFB] '>
                            <Image src={'/images/webp/one.webp'} width={36} height={36} alt="one" />
                            <p className=' font-Outfit text-xl font-normal pt-[11px]'>Customer-Centric</p>
                            <p className=' max-w-[297px] text-[#131200] opacity-[70%] font-Exo text-base font-normal'>Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.</p>
                        </div>
                    </div>
                </Slider>
                <Image className=' mt-[55px] lg:pb-16 pb-5' src={'/images/webp/tracforming.webp'} width={1140} height={527} alt="tracforming" />
            </div>
        </div>
    )
}

export default ChooseUs