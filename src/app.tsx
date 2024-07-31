import { tv } from "tailwind-variants";
import { Button } from "./components/button";
import { Card } from "./components/cards";
import { HeaderRoot } from "./components/header/HeaderRoot";
import { Services } from "./components/services/services";
import "./index.css"

export const paragraph = tv({
  base: 'text-paragraph-mobile md:text-paragraph-desktop md:text-left ',
  variants: {
      size: {
          sm: 'w-full md:w-[23vw]',
          md: 'w-full md:w-[34vw]',
          lg: 'w-full md:w-[42vw]',
          full: 'w-full'
      },
      alignTextMobile: {
        left: 'text-left',
        center: 'text-center'
      }
  },
  defaultVariants:{
      size: 'full',
      alignTextMobile: 'center'
  }
})

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
        <p className={`[grid-area:subtitle] ${paragraph({ size: "md", alignTextMobile: "left" })}`}>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Button />
        <img src="/public/assets/megafone.svg" alt="" className="
          [grid-area:image] 
          w-fit place-self-center"
        />
      </div>

      <Services/>

      <Card.Header
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        paragraphSize="lg"
      />
      <Card.Header
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
        paragraphSize="sm"
      />
      <Card.Header
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        paragraphSize="md"
      />
      <Card.Header
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        paragraphSize="md"
      />
      <Card.Header
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        paragraphSize="sm"
      />
    </div>
  )
}