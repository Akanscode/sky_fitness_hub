
import React from "react";
import Hero from "./Components/herosection";
import UpcomingClass from "./Components/upcomingclasssection";
import FounderStory from "./Components/founderstorysection";
import CompandSeason from "./Components/compandsection";
import BlogPost from "./Components/blogsection";
import Cta from "./Components/cta";
import Testimony from "./Components/testimony";


 
export const metadata = {
  title: 'sky fitness hub',
}


export default function Home() {
  return (
    <>
     <Hero /> 
      <UpcomingClass />
      <FounderStory />
      <CompandSeason/>
      <BlogPost />
      <Cta />
      <Testimony/>
    </>
  );
}

      
      
   
  
