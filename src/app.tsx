import { Button } from "./components/button";
import { Card } from "./components/cards";
import { HeaderRoot } from "./components/header/HeaderRoot";
import { Services } from "./components/services/services";
import "./index.css"
export function App() {
  return (
    <div className="flex flex-col w-full px-5 space-y-12 md:px-12 lg:px-24">
      <HeaderRoot></HeaderRoot>
      <div className="
        grid w-full gap-y-6 justify-items-start items-center
        grid-areas-card-mobile
       
        lg:grid-areas-card-desktop"
      >
        <div className="
          [grid-area:title]  
          text-title-1-mobile 
          md:text-title-1-desktop
        ">
          Navigating the digital landscape for success
        </div>
        <p className="[grid-area:subtitle] text-paragraph-mobile 
        lg:text-paragraph-desktop max-w-xl">
          
        </p>
        <Button />
        <img src="/public/assets/megafone.svg" alt="" className="
          [grid-area:image] 
          w-fit"
        />
      </div>

      <Services/>

      <Card.Header
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
    </div>
  )
}