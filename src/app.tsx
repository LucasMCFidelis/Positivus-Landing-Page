import { Button } from "./components/button";
import { HeaderRoot } from "./components/header/HeaderRoot";
import "./index.css"
export function App() {
  return (
    <div className="flex flex-col w-full px-5 md:px-12 lg:px-24">
      <HeaderRoot></HeaderRoot>
      <div className="
        grid w-full gap-x-28 gap-y-6 justify-items-start items-center
        grid-areas-card-mobile py-7
        md:py-16
        lg:grid-areas-card-desktop lg:py-16"
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
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Button />
        <img src="/public/assets/megafone.svg" alt="" className="
          [grid-area:image] 
          w-fit"
        />
      </div>

      <div className="flex flex-col items-center justify-start gap-5 md:gap-10 mb-20 md:flex-row">
        <h2 className="text-title-2-mobile md:text-title-2-desktop bg-lime-400 rounded-lg p-2">
          Services
        </h2>
        <p className="text-paragraph-mobile lg:text-paragraph-desktop w-fit max-w-xl">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="w-full flex flex-wrap flex-col sm:flex-row y
      items-center justify-center gap-6">
        <div className="min-w-80 max-w-full space-x-7 space-y-7
        justify-items-start items-baseline bg-gray-300 rounded-xl 
        grid-areas-mobile-service p-6 
        lg:grid-areas-desktop-service lg:h-80 lg:w-[550px] lg:items-center lg:px-14 "
        >
          <h2 className="[grid-area:title] bg-lime-600 w-fit rounded-md text-title-3-mobile md:text-title-3-desktop">
            Search engine <br />
            optimization
          </h2>
          <a href="#" target="_blank" className="[grid-area:link] flex items-center gap-3">
            <svg className="size-6" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
              <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
            </svg>
            <p className="text-responsive-paragraph hidden sm:block">Learn more</p>
          </a>
          <div className="[grid-area:image]"><img src="/public/assets/card1.svg" alt="" /></div>
        </div>

        <div className="min-w-80 max-w-full space-x-7 space-y-7
        justify-items-start items-baseline bg-gray-300 rounded-xl 
        grid-areas-mobile-service p-6 
        
        lg:grid-areas-desktop-service lg:h-80 lg:w-[550px] lg:items-center lg:px-14 "
        >
          <h2 className="[grid-area:title] bg-lime-600 w-fit rounded-md text-title-3-mobile md:text-title-3-desktop">
            Search engine <br />
            optimization
          </h2>
          <a href="#" target="_blank" className="[grid-area:link] flex items-center gap-3">
            <svg className="size-6" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
              <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
            </svg>
            <p className="text-responsive-paragraph hidden sm:block">Learn more</p>
          </a>
          <div className="[grid-area:image]"><img src="/public/assets/card1.svg" alt="" /></div>
        </div>

        <div className="min-w-80 max-w-full space-x-7 space-y-7
        justify-items-start items-baseline bg-gray-300 rounded-xl 
        grid-areas-mobile-service p-6 
        
        lg:grid-areas-desktop-service lg:h-80 lg:w-[550px] lg:items-center lg:px-14 "
        >
          <h2 className="[grid-area:title] bg-lime-600 w-fit rounded-md text-title-3-mobile md:text-title-3-desktop">
            Search engine <br />
            optimization
          </h2>
          <a href="#" target="_blank" className="[grid-area:link] flex items-center gap-3">
            <svg className="size-6" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
              <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
            </svg>
            <p className="text-responsive-paragraph hidden sm:block">Learn more</p>
          </a>
          <div className="[grid-area:image]"><img src="/public/assets/card1.svg" alt="" /></div>
        </div>

        <div className="min-w-80 max-w-full space-x-7 space-y-7
        justify-items-start items-baseline bg-gray-300 rounded-xl 
        grid-areas-mobile-service p-6 
        
        lg:grid-areas-desktop-service lg:h-80 lg:w-[550px] lg:items-center lg:px-14 "
        >
          <h2 className="[grid-area:title] bg-lime-600 w-fit rounded-md text-title-3-mobile md:text-title-3-desktop">
            Search engine <br />
            optimization
          </h2>
          <a href="#" target="_blank" className="[grid-area:link] flex items-center gap-3">
            <svg className="size-6" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
              <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
            </svg>
            <p className="text-responsive-paragraph hidden sm:block">Learn more</p>
          </a>
          <div className="[grid-area:image]"><img src="/public/assets/card1.svg" alt="" /></div>
        </div>
      </div>
    </div>
  )
}