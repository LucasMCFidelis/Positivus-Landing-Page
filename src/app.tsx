import { tv } from "tailwind-variants";
import "./index.css";
import Marquee from "react-fast-marquee";
import { Section } from "./components/sectionPage";

export const paragraph = tv({
  base: 'text-paragraph-mobile lg:text-paragraph-desktop',
  variants: {
    size: {
      sm: 'w-full lg:w-[23vw]',
      md: 'w-full lg:w-[34vw]',
      lg: 'w-full lg:w-[42vw]',
      full: 'w-full'
    },
    alignTextMobile: {
      left: 'text-left',
      center: 'text-center'
    },
    alignTextDesktop: {
      left: 'lg:text-left',
      center: 'lg:text-center'
    }
  },
  defaultVariants: {
    size: 'full',
    alignTextMobile: 'center',
    alignTextDesktop: 'left'
  }
})

export function App() {
  return (
    <main className="space-y-12">
      <div className="flex flex-col w-full px-5 space-y-12 md:px-12 lg:px-24">
        <Section.HeaderMain />
        <Section.Marketing
          paragraphSize="md"
          alignTextMobile="left"
        />
        <Marquee>
          <div className="grid grid-cols-3 lg:flex lg:flex-nowrap grayscale items-center justify-items-start">
            {["amazon", "dribbble", "hubspot", "notion", "netflix", "zoom"].map((logo, idx) => (
              <img
                key={idx}
                src={`/assets/logos-marquee/${logo}.svg`}
                alt={`${logo} Logo`}
                className={`w-[25vw] xl:w-[15vw] h-auto lg:px-14 ${idx >= 3 ? "ml-16 lg:ml-0" : ""}`}
              />
            ))
            }
          </div>
        </Marquee>
        <Section.Services />
        <Section.CaseStudies />
        <Section.WorkingProcess />
        <Section.Team />
        <Section.Testimonials />
        <Section.ContactUs />
      </div>
      <div className="space-y-12 lg:px-24">
        <Section.Footer />
      </div>
    </main>
  )
}