import { useState } from "react";
import { Card } from "../cards";
import { Button } from "../button";
import { Minus, Plus } from "lucide-react";
import { paragraph } from "../../app";

interface CardWorkingProcessProps {
    indexCard: number
    step: string
    description: string
}

export function SectionWorkingProcess() {
    const CardWorkingProcess = (({ indexCard, step, description }: CardWorkingProcessProps) => (
        <Card.Wrapper bgColor={openCardIndex === indexCard ? "secondary" : "primary"} className="space-y-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <h2 className="text-title-2-mobile lg:text-title-2-desktop">
                        {(indexCard+1).toString().padStart(2, '0')}
                    </h2>
                    <h3 className="text-title-3-mobile lg:text-title-3-desktop flex-indexCard">
                        {step}
                    </h3>
                </div>
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
                        {description}
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
                {[
                    {
                        step: 'Consultation',
                        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
                    },
                    {
                        step: 'Research and Strategy Development',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati deserunt iure deleniti officia quasi quisquam harum, facilis eum! Maxime mollitia dolore temporibus facere ducimus ut consequatur iste in tempore facilis!'
                    },
                    {
                        step: 'Implementation',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati deserunt iure deleniti officia quasi quisquam harum, facilis eum! Maxime mollitia dolore temporibus facere ducimus ut consequatur iste in tempore facilis!'
                    },
                    {
                        step: 'Monitoring and Optimization',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati deserunt iure deleniti officia quasi quisquam harum, facilis eum! Maxime mollitia dolore temporibus facere ducimus ut consequatur iste in tempore facilis!'
                    },
                    {
                        step: 'Reporting and Communication',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati deserunt iure deleniti officia quasi quisquam harum, facilis eum! Maxime mollitia dolore temporibus facere ducimus ut consequatur iste in tempore facilis!'
                    },
                    {
                        step: 'Continual Improvement',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati deserunt iure deleniti officia quasi quisquam harum, facilis eum! Maxime mollitia dolore temporibus facere ducimus ut consequatur iste in tempore facilis!'
                    },
                ].map((item, idx) => (
                    <CardWorkingProcess key={idx} indexCard={idx} step={item.step} description={item.description}/>
                ))}
            </div>
        </>
    )
}