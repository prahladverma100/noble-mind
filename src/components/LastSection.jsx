import React from 'react'
import Image from 'next/image'
import { Facebook, In, Insta, Tiwtter } from './Icon'
const LastSection = () => {
    return (
        <div className=' bg_footer bg-no-repeat bg-cover bg-center pt-[138px]' id='Blogs'>
            <div className=' mx-auto px-3 max-w-[1140px]'>
                <div className=' md:flex-row flex flex-col'>
                    <div className='w-full md:w-8/12 '>
                        <Image className=' cursor-pointer' src={'/images/webp/footer_img.webp'} width={241} height={42} alt="footer_img" />
                        <p className=' font-Exo font-normal text-base text-white md:pb-2 pb-5 pt-7'>Follow Us</p>
                        <div className=' flex gap-4 '>
                            <a href="https://www.facebook.com/" className=' cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300'><Facebook /></a>
                            <a href="https://www.instagram.com/" className=' cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300'><Insta /></a>
                            <a href="https://twitter.com/?lang=en" className=' cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300'><Tiwtter /></a>
                            <a href="https://www.instagram.com/indotcom/?hl=en" className=' cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300'><In /></a>
                        </div>
                    </div>
                    <div className='w-full md:w-4/12'>
                        <div className=' flex-row flex md:pt-0 pt-5'>
                            <div className=' w-1/2'>
                                <ul>
                                    <li className='pb-4'><a href="" className=' text-white font-Outfit font-semibold'>Maine</a></li>
                                    <li className='pb-[14px]'><a href="#home" className=' font-Exo relative after:absolute after:w-0 after:h-[2px] after:bg-[white] after:opacity-[70%] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 text-white text-base font-normal opacity-[70%] '>Home</a></li>
                                    <li className='pb-[14px]'><a href="#About" className='  font-Exo relative after:absolute after:w-0 after:h-[2px] after:bg-[white] after:opacity-[70%] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 text-white text-base font-normal opacity-[70%] '>About Us</a></li>
                                    <li className='pb-[14px]'><a href="#Services" className='  font-Exo relative after:absolute after:w-0 after:h-[2px] after:bg-[white] after:opacity-[70%] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 text-white text-base font-normal opacity-[70%] '>services</a></li>
                                    <li className='pb-[14px]'><a href="#Choose" className='  font-Exo relative after:absolute after:w-0 after:h-[2px] after:bg-[white] after:opacity-[70%] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 text-white text-base font-normal opacity-[70%] '>Why Choose Us    </a></li>
                                </ul>
                            </div>
                            <div className='w-1/2'>
                                <ul>
                                    <li className='pb-4'><a href="" className=' font-Outfit font-semibold text-white text-base'>Legal</a></li>
                                    <li className='pb-[14px]'><a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" className='  font-Exo relative after:absolute after:w-0 after:h-[2px] after:bg-[white] after:opacity-[70%] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 text-white text-base font-normal opacity-[70%]  '>Term & Conduction</a></li>
                                    <li className='pb-[14px]'><a href="https://policies.google.com/privacy?hl=en-US" className='  font-Exo relative after:absolute after:w-0 after:h-[2px] after:bg-[white] after:opacity-[70%] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 text-white text-base font-normal opacity-[70%] '>Privacy Policy</a></li>
                                    <li className='pb-[14px]'><a href="mailto:webmaster@example.comx" className='  font-Exo relative after:absolute after:w-0 after:h-[2px] after:bg-[white] after:opacity-[70%] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 text-white text-base font-normal opacity-[70%] '>Contact</a></li>
                                    <li className='pb-[14px]'><a href="tel:+4733378901" className='  font-Exo relative after:absolute after:w-0 after:h-[2px] after:bg-[white] after:opacity-[70%] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 text-white text-base font-normal opacity-[70%] '>(629) 555-0129</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className=' h-[1px] w-full bg-[#5A5A50] lg:mt-12 mt-5 '></div>
            <p className=' text-white font-normal text-sm text-center opacity-[70%] pt-4 pb-9' >© Copyright 2023 Noble Mind | All rights reserved</p>
        </div>
    )
}

export default LastSection