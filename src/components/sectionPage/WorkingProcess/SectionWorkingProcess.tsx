import { useState } from "react";
import { Card } from "../../cards";
import { WorkingProcessCard } from "./WorkingProcessCard";

export function SectionWorkingProcess() {
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
                    <WorkingProcessCard
                        key={idx}
                        indexCard={idx}
                        step={item.step}
                        description={item.description}
                        openCardIndex={openCardIndex}
                        toggleCard={toggleCard}
                    />
                ))}
            </div>
        </>
    )
}