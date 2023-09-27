import FounderStory from "./Components/founderstory";
import Hero from "./Components/hero";
import UpcomingClass from "./Components/upcomingclass";
import CompandSeason from "./Components/compandseason";
import BlogPost from "./Components/blogpost";



export default function Home() {
  return (
    <main>
      <Hero />
      <UpcomingClass />
      <FounderStory />
      <CompandSeason/>
      <BlogPost/>
      
      
   </main>
  )
}
