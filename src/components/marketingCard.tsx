import { paragraph } from "../app";
import { Button } from "./button";

interface MarketingCardProps {
    paragraphSize?: "full" | "sm" | "md" | "lg" | undefined
    alignTextMobile?: "center" | "left" | undefined
}

export function MarketingCard({ paragraphSize, alignTextMobile }: MarketingCardProps) {
    return (
        <div className="
        grid w-full gap-y-6 justify-items-start items-center
        grid-areas-card-mobile
        lg:grid-areas-card-desktop"
        >
            <div className="
                [grid-area:title]  
                text-title-1-mobile 
                lg:text-title-1-desktop
            ">
                Navigating the digital landscape for success
            </div>
            <p className={`[grid-area:subtitle] ${paragraph({ size: paragraphSize, alignTextMobile: alignTextMobile })}`}>
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button />
            <img src="/public/assets/megafone.svg" alt="" className="[grid-area:image] w-fit place-self-center"
            />
        </div>
    )
}