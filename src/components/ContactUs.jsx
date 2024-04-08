import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
    return (
        <div className=' lg:pt-20 pt-0'>
            <div className=' mx-auto px-3 max-w-[1140px]' id='Services'>
                <div className=' lg:flex-row flex flex-col'>
                    <div className='w-full lg:w-1/2 mx-auto' data-aos="fade-right">
                        <h3 className=' font-Outfit font-bold text-3xl md:text-4xl lg:text-5xl lg:text-start text-center lg:justify-start leading-[57.6px] text-[#131200]'>Contact <span className=' font-light'>Us</span></h3>
                        <p className=' font-Exo pt-4 font-normal text-base opacity-[70%] text-center lg:text-start text-[#131200] '>Feel free to contact us any time . We will get back to you <span className=' block'>as soon as we can!</span></p>
                        <div className=' flex sm:flex-row mx-auto justify-center lg:justify-start flex-col gap-[11px]'>
                            <div className='pt-4'>
                                <p className=' font-Exo pb-[5px] font-normal text-base opacity-[70%] text-[#131200]'>Name</p>
                                <input type="text" className=' outline-none w-full sm:min-w-[233px] h-[48px] rounded-[8px] border-[1px] border-[#13120033] font-Exo font-normal text-base opacity-[70%] text-[#131200]' placeholder='' />
                            </div>
                            <div className='pt-4'>
                                <p className=' font-Exo pb-[5px] font-normal text-base opacity-[70%] text-[#131200]'>Last Name</p>
                                <input type="text" className=' outline-none w-full sm:min-w-[233px] h-[48px] rounded-[8px] border-[1px] font-Exo font-normal text-base opacity-[70%] text-[#131200] border-[#13120033]' placeholder='' />
                            </div>
                        </div>
                        <div className='pt-4 flex justify-center lg:justify-start'>
                            <div className='w-full sm:max-w-[478px]'>
                                <p className=' font-Exo pb-[5px] font-normal text-base opacity-[70%] text-[#131200]'>Email</p>
                                <input type="text" className=' mx-auto outline-none w-full sm:max-w-[478px]  h-[48px] rounded-[8px] border-[1px] font-Exo font-normal text-base opacity-[70%] text-[#131200] border-[#13120033]' placeholder='' />
                            </div>
                        </div>
                        <div className=' pt-4 flex justify-center lg:justify-start'>
                            <div className='w-full sm:max-w-[478px]'>
                                <p className=' font-Exo pb-[5px] font-normal text-base opacity-[70%] text-[#131200]'>Message</p>
                                <textarea name="" className='outline-none resize-none w-full sm:max-w-[478px] min-h-[135px] rounded-[8px] border-[1px] font-Exo font-normal text-base opacity-[70%] text-[#131200] border-[#13120033]' ></textarea>
                                <div className='buttons-wrapper'><button className='py-[14px] px-6 mt-6 ms-4 rounded-[4px]  text-white bg-[#995EEC] click-btn btn_style'>Submit</button></div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex justify-center pt-3 lg:pt-0 lg:w-1/2' data-aos="fade-left">
                        <Image className=' flex justify-center' src={'/images/png/contactus.png'} width={598} height={580} alt="contactus" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs