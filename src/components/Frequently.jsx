"use client";
import React, { useState } from 'react'
import Image from 'next/image'

import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
function Icon({ id, open }) {
    return (
        <svg width="12" height="7" className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00078 0.0251951C5.86745 0.0251951 5.73811 0.0501957 5.61278 0.100196C5.48745 0.150196 5.38345 0.216862 5.30078 0.300196L0.700781 4.9002C0.517448 5.08353 0.425781 5.31686 0.425781 5.6002C0.425781 5.88353 0.517448 6.11686 0.700781 6.3002C0.884114 6.48353 1.11745 6.5752 1.40078 6.5752C1.68411 6.5752 1.91745 6.48353 2.10078 6.3002L6.00078 2.4002L9.90078 6.3002C10.0841 6.48353 10.3174 6.5752 10.6008 6.5752C10.8841 6.5752 11.1174 6.48353 11.3008 6.3002C11.4841 6.11686 11.5758 5.88353 11.5758 5.6002C11.5758 5.31686 11.4841 5.08353 11.3008 4.9002L6.70078 0.300196C6.60078 0.200196 6.49245 0.129195 6.37578 0.0871954C6.25911 0.0451956 6.13411 0.0245285 6.00078 0.0251951Z" fill="#5A594D" />
        </svg>

    );
}

const Frequently = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className=' lg:pt-[150px] pt-5 relative' id='FAQ'>
            <Image className=' absolute top-[42%] hidden lg:block right-[1%]' src={'/images/png/trangel.png'} height={95} width={70} alt="trangel" />
            <Image className=' absolute top-[8%] left-[1%] hidden sm:block' src={'/images/png/trangel.png'} height={95} width={70} alt="trangel" />
            <Image className=' absolute bottom-[18%] left-[1%] hidden sm:dlock' src={'/images/png/trangel.png'} height={95} width={70} alt="trangel" />
            <div className=' mx-auto px-3 max-w-[1140px]'>
                <h3 className=' font-Outfit text-5xl leading-[57.6px] text-[#131200] text-center' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Frequently <span className=' font-semibold'>Asked Questions</span></h3>
                <p className=' font-Exo font-normal text-base opacity-[70%] text-center text-[#131200] pt-4 pb-[52px]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Lorem ipsum dolor sit amet consectetur. Orci augue mollis <span className=' block'>eu volutpat mi leo. Nibh nisl consequat metus.</span></p>
                <div className=" max-w-[798px] mx-auto px-3 gap-[18px] flex flex-col lg:pb-24 pb-0" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">
                    <Accordion className={`border-[black] ${open === 1 ? "!border-b-[5px] border-[1px] border-[#A754E8] " : "!border-[1px] border-b-0 border-[#EDDCFA]"} px-6 py-6 border-b-[0] rounded-[10px] overflow-hidden`} open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader className={` ${handleOpen === 1 ? "text-[blue]" : " text-black"} text-start font-Outfit text-base font-medium`} onClick={() => handleOpen(1)}>What is Artificial Intelligence (AI)?</AccordionHeader>
                        <AccordionBody>
                            <p className=" font-normal font-Exo text-base max-w-[680px] text-black opacity-[70%] pt-3">Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.</p>
                        </AccordionBody>
                    </Accordion>
                    <Accordion className={`border-[black] ${open === 2 ? "!border-b-[5px] border-[1px] border-[#A754E8] " : "!border-[1px] border-b-0 border-[#EDDCFA]"} px-6 py-6 border-b-[0] rounded-[10px] overflow-hidden`} open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader className={` ${handleOpen === 1 ? "text-[blue]" : " text-black"} text-start font-Outfit text-base font-medium`} onClick={() => handleOpen(2)}>
                            How does AI benefit our company?
                        </AccordionHeader>
                        <AccordionBody>
                            <p className=" font-normal font-Exo text-base max-w-[680px] text-black opacity-[70%] pt-3">Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.</p>
                        </AccordionBody>
                    </Accordion>
                    <Accordion className={`border-[black] ${open === 3 ? "!border-b-[5px] border-[1px] border-[#A754E8] " : "!border-[1px] border-b-0 border-[#EDDCFA]"} px-6 py-6 border-b-[0] rounded-[10px] overflow-hidden`} open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader className={` ${handleOpen === 1 ? "text-[blue]" : "text-black"} text-start  font-Outfit text-base font-medium`} onClick={() => handleOpen(3)}>
                            What types of AI technologies are relevant to our industry?
                        </AccordionHeader>
                        <AccordionBody>
                            <p className=" font-normal font-Exo text-base max-w-[680px] text-black opacity-[70%] pt-3">Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.</p>
                        </AccordionBody>
                    </Accordion>
                    <Accordion className={`border-[black] ${open === 4 ? "!border-b-[5px] border-[1px] border-[#A754E8] " : "!border-[1px] border-b-0 border-[#EDDCFA]"} px-6 py-6 border-b-[0] rounded-[10px] overflow-hidden`} open={open === 4} icon={<Icon id={4} open={open} />}>
                        <AccordionHeader className={` ${handleOpen === 1 ? "text-[blue]" : " black"} text-start font-Outfit text-base font-medium`} onClick={() => handleOpen(4)}>
                            How can our employees adapt to AI integration?
                        </AccordionHeader>
                        <AccordionBody>
                            <p className=" font-normal font-Exo text-base max-w-[680px] text-black opacity-[70%] pt-3">Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.</p>
                        </AccordionBody>
                    </Accordion>
                    <Accordion className={`border-[black] ${open === 5 ? "!border-b-[5px] border-[1px] border-[#A754E8] " : "!border-[1px] border-b-0 border-[#EDDCFA]"} px-6 py-6 border-b-[0] rounded-[10px] overflow-hidden`} open={open === 5} icon={<Icon id={5} open={open} />}>
                        <AccordionHeader className={` ${handleOpen === 5 ? "text-[blue]" : " black"} text-start font-Outfit text-base font-medium`} onClick={() => handleOpen(5)}>
                            How can our employees adapt to AI integration?
                        </AccordionHeader>
                        <AccordionBody>
                            <p className=" font-normal font-Exo text-base max-w-[680px] text-black opacity-[70%] pt-3">Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.</p>
                        </AccordionBody>
                    </Accordion>

                </div>
                <div className=' bg_img1 translate-y-[30%] bg-cover rounded-[20px] px-3 py-14 bg-no-repeat bg-center'>
                    <h3 className=' font-Outfit text-3xl md:text-4xl lg:text-5xl leading-[57.6px] text-center text-white' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="900">Subscribe to our <span className=' font-semibold'>Newsletter!</span></h3>
                    <p className=' text-white text-center font-normal text-base font-Exo pt-2' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="900">Be the first to get exclusive offers and the latest news.</p>
                    <div className=' max-w-[448px] w-full flex mx-auto mt-9 rounded-[6px] bg-[#8C62DB] border-[1px] border-[#A280E1]' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="900">
                        <input type="text" className=' w-full bg-transparent text-white outline-none' placeholder='Enter your email' />
                        <button className=' text-white text-base hover:bg-white hover:text-[#8C62DB] font-semibold duration-300 ease-in-out border-[1px] rounded-[4px] my-[10px] me-[10px] font-Outfit px-6 py-[14px]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Frequently

