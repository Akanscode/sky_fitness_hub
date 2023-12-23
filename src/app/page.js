
import React from "react";
import Hero from "./Components/HeroSection";
import UpcomingClass from "./Components/UpcomingClassSection";
import FounderStory from "./Components/FounderStorySection";
import CompandSeason from "./Components/CompandSection";
import BlogPost from "./Components/BlogSection";
import Cta from "./Components/Cta";
import Testimony from "./Components/Testimony";
import NavBarLayout from './Components/navbarlayout';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export const metadata = {
  title: 'sky fitness hub',
}
export default function Home() {
  return (
    <>
      <ToastContainer />
      <NavBarLayout />
     <Hero /> 
      <UpcomingClass />
      <FounderStory />
      <CompandSeason/>
      <BlogPost />
      <Cta />
      <Testimony />
       <Footer />
    </>
  );
}

      
      
   
  
