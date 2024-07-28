import { HeaderRoot } from "./components/header/HeaderRoot";
import "./index.css"
export function App() {
  return (
    <div className="h-screen w-screen px-5 sm:px-24">
      <HeaderRoot></HeaderRoot>
      <div className="
        grid gap-x-28 place-items-start
        grid-areas-card-mobile py-7  h-[710px] 
        sm:grid-areas-card-desktop sm:py-16 sm:h-[515px]" 
      >
        <div className="
          [grid-area:title] w-full 
          text-4xl
          sm:text-6xl
        ">
          Navigating the digital landscape for success
        </div>
        <div className="[grid-area:subtitle]">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </div>
        <button className="[grid-area:button]">Book a consultation</button>
        <img src="/public/assets/megafone.svg" alt="" className="[grid-area:image]" />
      </div>
    </div>
  )
}