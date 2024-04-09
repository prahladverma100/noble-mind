"use client";
import React, { useEffect, useState } from 'react'

function BackToTop() {
    const [backTop, setBackTop] = useState(false);
    const moveToTop = () => {
        document.documentElement.scrollTop = 0;
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.documentElement.scrollTop > 100) {
                setBackTop(true);
            } else {
                setBackTop(false);
            }
        });
    })
    return (
        <div>
            {backTop ? (<button id='text' onClick={moveToTop} className="transition-all delay-300 fixed  bg-[white] border-[1px] border-[black]  bottom-0 end-0 me-2 mb-4 animate-bounce  pointer z-10  rounded-[100px]  py-2 px-3">
                <svg width="20" height="30" fill="#000" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"></path><path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path>
                </svg>
            </button>
            ) : ("")}
        </div>
    )
}

export default BackToTop