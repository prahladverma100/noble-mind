"use client";
import AboutUs from "@/components/AboutUs";
import ChooseUs from "@/components/ChooseUs";
import ContactUs from "@/components/ContactUs";
import Frequently from "@/components/Frequently";
import Header from "@/components/Header";
import LastSection from "@/components/LastSection";
// import BackToTop from "@/components/common/BackToTop";
  import {useEffect} from 'react';
  import Aos from 'aos';
  import "aos/dist/aos.css"
import Preloader from "@/components/common/Preloader";
export default function Home() {
     useEffect(() => {
       Aos.init({
         duration: 1500,
         once: true,
       });
     }, [])
 
  return ( < div className = "overflow_hidden" >
    <Header />
    <AboutUs />
    <ChooseUs/>
    < ContactUs />
    <Frequently />
    <LastSection />
    {/* < BackToTop /> */}
    <Preloader/>
    </div>
  );
}