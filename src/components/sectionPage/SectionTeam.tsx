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
        <div className="flex items-end gap-5">
            <img src={pathImage} alt={altImage} className="self-start" />
            <div className="w-full h-full flex flex-col justify-between relative">
                <svg className="absolute top-0 right-0" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17" cy="17" r="17" fill="black" />
                    <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66" />
                    <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66" />
                    <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66" />
                </svg>
                <div className="flex-1 flex items-end">
                    <p className={`${paragraph({ size: "full" })}`}><span className="font-semibold">{name}</span> <br /> {position}</p>
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
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10">
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
