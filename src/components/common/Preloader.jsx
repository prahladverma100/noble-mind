"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
function Preloader() {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById("none").classList.add("hidden");
            document.body.classList.remove("overflow-hidden");
        }, 3000);
    });
    return (
        <div>
            <div id="none" className="h-screen w-full bg-white  fixed top-0 start-0 z-50">
                <div className="flex justify-center items-center h-screen">
                    <div className=' animate-bounce relative'>
                        <Image src={'/images/webp/noble_logo.webp'} width={221} height={38} alt="noble_logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader