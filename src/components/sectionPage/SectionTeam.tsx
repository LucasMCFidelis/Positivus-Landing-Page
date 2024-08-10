import { Linkedin } from "lucide-react";
import { paragraph } from "../../app";
import { Button } from "../button";
import { Card } from "../cards";

interface TeamCardProps {
    name: string;
    position: string;
    pathImage: string;
    altImage: string;
    resumePerson: string;
}

const TeamCard = ({ name, position, pathImage, altImage, resumePerson }: TeamCardProps) => (
    <Card.Wrapper bgColor="primary" size="full" rounded="lg" className="flex flex-col gap-y-6 relative">
        <div className="flex items-end gap-3 space-y-8">
            <img src={pathImage} alt={altImage} className="min-w-24 w-[10vw]" />
            <div className="w-full h-full flex flex-col justify-between relative">
                <Button colorBG={"dark"} rounded="full" className="absolute top-0 right-0" >
                    <Linkedin color="#B9FF66" size={18}/>
                </Button>
                <div className="flex-1 flex items-end">
                    <p className={`${paragraph({ size: "full", alignTextMobile:"left" })}`}><span className="font-semibold">{name}</span> <br /> {position}</p>
                </div>
            </div>
        </div>

        <div className="h-0.5 bg-zinc-300"></div>

        <p className={paragraph({ size: "full" })}>{resumePerson}</p>
    </Card.Wrapper>
);

export function SectionTeam() {
    return (
        <>
            <Card.Header
                title="Team"
                description="Meet the skilled and experienced team behind our successful digital marketing strategies"
                paragraphSize="md"
            />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {[
                    {
                        name: "John Smith",
                        position: "CEO and Founder",
                        resume: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
                    },
                    {
                        name: "Jane Doe",
                        position: "Director of Operations",
                        resume: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
                    },
                    {
                        name: "Michael Brown",
                        position: "Senior SEO Specialist",
                        resume: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
                    },
                    {
                        name: "Emily Johnson",
                        position: "Content Creator",
                        resume: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
                    },
                    {
                        name: "Brian Williams",
                        position: "Social Media Specialist",
                        resume: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
                    },
                    {
                        name: "Sarah Kim",
                        position: "PPC Manager",
                        resume: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
                    },
                ].map((person, idx) => (
                    <TeamCard key={idx} name={person.name} position={person.position} pathImage={`/public/assets/profile-team/${person.name}.png`} altImage={person.name} resumePerson={person.resume} />
                ))}
            </div>
            <div className="flex justify-end">
                <Button text={"See all team"} colorBG={"dark"} />
            </div>
        </>
    );
}
