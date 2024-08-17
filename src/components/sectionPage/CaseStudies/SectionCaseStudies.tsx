import { Card } from "../../cards";
import { CaseStudyCard } from "./CaseStudyCard";


export function SectionCaseStudies() {
    const CaseStudyList = [
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
    ]

    return (
        <>
            <Card.Header
                title="Case Studies"
                description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
                paragraphSize="lg"
            />

            {innerWidth <= 1024 ? (
                <div className="overflow-x-auto w-auto">
                    <div className={`w-max grid grid-cols-${CaseStudyList.length} gap-x-[2%] `}>
                        {CaseStudyList.map((item, idx) => (
                            <Card.Wrapper
                                key={idx}
                                bgColor="tertiary"
                                border="none"
                                size="full"
                                rounded="lg"
                                className="w-[90%] flex items-center justify-center text-zinc-200"
                            >
                                <CaseStudyCard
                                    description={item}
                                />
                            </Card.Wrapper>
                        ))}
                    </div>
                </div>
            ) : (
                <Card.Wrapper
                    bgColor="tertiary"
                    border="none"
                    size="full"
                    rounded="lg"
                    className={`w-full flex items-center justify-between text-zinc-200 py-16`}
                >
                    {CaseStudyList.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${idx !== 0 ? 'border-l border-gray-300' : ''}`}
                        >
                            <CaseStudyCard
                                description={item}
                            />
                        </div>
                    ))}
                </Card.Wrapper>
            )}
        </>
    )
}