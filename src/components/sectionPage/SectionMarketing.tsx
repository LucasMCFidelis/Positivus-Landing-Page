import { paragraph } from "../../app"
import { Button } from "../button"
import MarketingImg from "/public/assets/megafone.svg"

interface SectionMarketingProps {
    paragraphSize?: "full" | "sm" | "md" | "lg" | undefined
    alignTextMobile?: "center" | "left" | undefined
}

export function SectionMarketing({ paragraphSize, alignTextMobile }: SectionMarketingProps) {
    return (
        <div
            className="w-full gap-y-6 justify-items-start items-center
            grid-cols-1 grid-rows-[auto_auto_auto_auto]
            lg:grid-cols-[52%_1fr] lg:grid-rows-[auto_auto_auto]"
            style={{
                display: 'grid',
                gridTemplateAreas:
                    window.innerWidth >= 1024
                        ? (
                            `'title image'
                            'subtitle image'
                            'button image'`
                        ) : (
                            `'title'
                            'image'
                            'subtitle'
                            'button'`
                        )
            }}
        >
            <div className="
                [grid-area:title]  
                text-title-1-mobile 
                lg:text-title-1-desktop
            ">
                Navigating the digital landscape for success
            </div>
            <p className={`
                [grid-area:subtitle] 
                ${paragraph({
                size: paragraphSize,
                alignTextMobile: alignTextMobile
            })}
            `}>
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button
                colorBG={"dark"}
            >
                Book a consultation
            </Button>
            <img
                src={MarketingImg}
                alt=""
                className="[grid-area:image] w-full h-full place-self-center"
            />
        </div>
    )
}