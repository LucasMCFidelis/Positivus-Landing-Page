import { useState } from "react";
import { Card } from "../cards";
import { Button } from "../button";
import { Minus, Plus } from "lucide-react";
import { paragraph } from "../../app";

interface CardWorkingProcessProps {
    indexCard: number

}


export function SectionWorkingProcess() {
    const CardWorkingProcess = (({ indexCard }: CardWorkingProcessProps) => (
        <Card.Wrapper bgColor={openCardIndex === indexCard ? "secondary" : "primary"} className="space-y-4">
            <div className="flex justify-between items-center gap-6">
                <h2 className="text-title-2-mobile lg:text-title-2-desktop">
                    {indexCard+1}
                </h2>
                <h3 className="text-title-3-mobile lg:text-title-3-desktop flex-indexCard">
                    Consultation
                </h3>
                <Button
                    colorBG={"white"}
                    rounded="full"
                    onClick={() => toggleCard(indexCard)}
                >
                    {openCardIndex === indexCard ? <Minus /> : <Plus />}
                </Button>
            </div>
            {openCardIndex === indexCard && (
                <>
                    <div className="h-0.5 w-full bg-zinc-900"></div>
                    <p className={paragraph({ size: "full" })}>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </>
            )}
        </Card.Wrapper>
    ))
    
    const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

    function toggleCard(index: number) {
        setOpenCardIndex(openCardIndex === index ? null : index);
    }

    return (
        <>
            <Card.Header
                title="Our Working Process"
                description="Step-by-Step Guide to Achieving Your Business Goals"
                paragraphSize="sm"
            />
            <div className="space-y-8">
                <CardWorkingProcess indexCard={0}/>
                <CardWorkingProcess indexCard={1}/>
            </div>
        </>
    )
}