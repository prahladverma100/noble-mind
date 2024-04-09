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
                        <Image src={'/images/png/noble_logo.png'} width={221} height={38} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader