import { Button } from "./components/button";
import { HeaderRoot } from "./components/header/HeaderRoot";
import "./index.css"
export function App() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen max-w-screen px-5 md:px-12 lg:px-24">
      <HeaderRoot></HeaderRoot>
      <div className="
        grid w-full gap-x-28 gap-y-6 justify-items-stretch items-center
        grid-areas-card-mobile py-7
        md:py-16
        lg:grid-areas-card-desktop lg:py-16" 
      >
        {/* <div className="
          [grid-area:title]  
          text-3xl
          sm:[font-size: 10vw] 
        ">
          Navigating the digital landscape for success
        </div> */}
        {/* <div className="
          [grid-area:title]  
          text-3xl
          sm:text-6xl 
          md:w-4/5
          lg:w-3/4 
        ">
          Navigating the digital landscape for success
        </div> */}
        <div className="
          [grid-area:title]  
          text-responsive-title max-w-xl
        ">
          Navigating the digital landscape for success
        </div>
        <p className="[grid-area:subtitle] text-responsive-paragraph max-w-xl">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Button/>
        <img src="/public/assets/megafone.svg" alt="" className="
          [grid-area:image] 
          w-fit" 
        />
      </div>

      
    </div>
  )
}
