import { tv } from "tailwind-variants";
import { Card } from "./components/cards";
import { HeaderRoot } from "./components/header/HeaderRoot";
import { Services } from "./components/services/services";
import "./index.css"
import { MarketingCard } from "./components/marketingCard";
import Marquee from "react-fast-marquee";

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
  defaultVariants: {
    size: 'full',
    alignTextMobile: 'center'
  }
})

export function App() {
  return (
    <div className="flex flex-col w-full px-5 space-y-12 md:px-12 lg:px-24">
      <HeaderRoot></HeaderRoot>

      <MarketingCard
        paragraphSize="md"
        alignTextMobile="left"
      />

      <Marquee>
        <div className="grid grid-cols-3 lg:flex lg:flex-nowrap grayscale items-center justify-items-start">
          <img src="/public/assets/logos-marquee/amazon.svg" alt="Amazon Logo" className="h-auto px-8 lg:px-14" />
          <img src="/public/assets/logos-marquee/dribbble.svg" alt="Dribbble Logo" className="h-auto px-8 lg:px-14" />
          <img src="/public/assets/logos-marquee/hubspot.svg" alt="Hubspot Logo" className="h-auto px-8 lg:px-14" />
          <img src="/public/assets/logos-marquee/notion.svg" alt="Notion Logo" className="h-auto px-8 ml-16 lg:ml-0 lg:px-14" />
          <img src="/public/assets/logos-marquee/netflix.svg" alt="Netflix Logo" className="h-auto px-8 ml-16 lg:ml-0 lg:px-14" />
          <img src="/public/assets/logos-marquee/zoom.svg" alt="Zoom Logo" className="h-auto px-8 ml-16 lg:ml-0 lg:px-14" />
        </div>
      </Marquee>

      <Services />

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