import React from 'react'
import Image from 'next/image'
import { Star } from './Icon'

const AboutUs = () => {
    return (
        <div className=' lg:pt-[150px] pt-5 relative' id='About'>
            <Image className=' absolute bottom-0 right-[1%] hidden md:block' src={'/images/png/trangel.png'} height={95} width={70} alt="trangel" />
            <div className=' mx-auto px-3 max-w-[1140px]'>
                <div className=' lg:flex-row flex-col flex gap-5 lg:gap-[75px]'>
                    <div className='w-full flex justify-center lg:w-1/2' data-aos="fade-right">
                        <Image className=' flex justify-center' src={'/images/png/eg2.png'} height={567} width={544} alt="eg2" />
                    </div>
                    <div className='w-full lg:w-1/2' data-aos="fade-left">
                        <div className=' flex'>
                            <Star />
                            <p className=' font-Exo font-normal text-base'>About Us</p>
                        </div>
                        <h3 className=' font-Outfit font-light max-w-[521px] text-3xl md:text-4xl lg:text-5xl mt-2'>Pioneering Vision & Mission <span className=' font-bold'>-Driven Sectoral Innovation</span></h3>
                        <p className=' pt-4 font-Exo'>Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>    
                        <div className='buttons-wrapper'><button className=' px-6 py-[14px] font-Outfit bg-[#975FED] text-white rounded-[4px] lg:mt-10 mt-5 click-btn btn_style'>Read More</button></div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs