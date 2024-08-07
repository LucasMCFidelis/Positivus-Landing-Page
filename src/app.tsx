import { tv } from "tailwind-variants";
import { Card } from "./components/cards";
import { Services } from "./components/sectionPage/services";
import "./index.css"
import { MarketingCard } from "./components/marketingCard";
import Marquee from "react-fast-marquee";
import { HeaderMain } from "./components/sectionPage/headerMain";

export const paragraph = tv({
  base: 'text-paragraph-mobile lg:text-paragraph-desktop lg:text-left ',
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
      <HeaderMain></HeaderMain>

      <MarketingCard
        paragraphSize="md"
        alignTextMobile="left"
      />

      <Marquee>
        <div className="grid grid-cols-3 lg:flex lg:flex-nowrap grayscale items-center justify-items-start">
          {["amazon", "dribbble", "hubspot", "notion", "netflix", "zoom"].map((logo, idx) => (
            <img
              key={idx}
              src={`/public/assets/logos-marquee/${logo}.svg`} 
              alt= {`${logo} Logo`} 
              className={`h-auto lg:px-14 ${idx >= 3 ? "ml-16 lg:ml-0" : ""}`}
            />
          ))
          }
        </div>
      </Marquee>

      <Services />

      <div className="w-full">
        <Card.Header
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          paragraphSize="lg"
        />
        <div className="overflow-x-auto">
          <Card.Wrapper bgColor="tertiary" border="none" size="full" rounded="lg" className="w-max flex gap-x-7 items-center justify-center text-zinc-200 px-4 py-6 lg:px-14 lg:py-16">
            <div className="px-4 space-y-4 w-72 lg:w-auto flex-shrink-0">
              <p className={paragraph({ size: "sm", alignTextMobile:"left"})}>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
              </p>
              <a href="#" className="text-[#B9FF66] flex gap-5 items-center">
                Learn More
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66" />
                </svg>
              </a>
            </div>
            <div className="border-x-2 px-4 space-y-4 w-72 lg:w-auto flex-shrink-0">
              <p className={paragraph({ size: "sm", alignTextMobile:"left"})}>
                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
              </p>
              <a href="#" className="text-[#B9FF66] flex gap-5 items-center">
                Learn More
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66" />
                </svg>
              </a>
            </div>
            <div className="px-4 space-y-4 w-72 lg:w-auto flex-shrink-0">
              <p className={paragraph({ size: "sm", alignTextMobile:"left"})}>
                For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
              </p>
              <a href="#" className="text-[#B9FF66] flex gap-5 items-center">
                Learn More
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66" />
                </svg>
              </a>
            </div>
          </Card.Wrapper>
        </div>
      </div>

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

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-10">
        <Card.Wrapper bgColor="primary" size="lg" rounded="lg">
          <p>aaaaaaaaaa</p>
          <p>aaaaaaaaaa</p>
          <p>aaaaaaaaaa</p>
          <p>aaaaaaaaaa</p>
          <p>aaaaaaaaaa</p>
          <p>aaaaaaaaaa</p>
          <p>aaaaaaaaaa</p>
          <p>aaaaaaaaaa</p>
          <p>aaaaaaaaaa</p>
          <p>aaaaaaaaaa</p>
        </Card.Wrapper>
        <Card.Wrapper bgColor="primary" size="lg" rounded="lg">
          <p>aaaaaaaaaa</p>
        </Card.Wrapper>
        <Card.Wrapper bgColor="primary" size="lg" rounded="lg">
          <p>aaaaaaaaaa</p>
        </Card.Wrapper>
        <Card.Wrapper bgColor="primary" size="lg" rounded="lg">
          <p>aaaaaaaaaa</p>
        </Card.Wrapper>
        <Card.Wrapper bgColor="primary" size="lg" rounded="lg">
          <p>aaaaaaaaaa</p>
        </Card.Wrapper>
        <Card.Wrapper bgColor="primary" size="lg" rounded="lg">
          <p>aaaaaaaaaa</p>
        </Card.Wrapper>
      </div>


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