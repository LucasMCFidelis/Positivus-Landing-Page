import { Linkedin } from "lucide-react";
import { paragraph } from "../../../app";
import { Button } from "../../button";
import { Card } from "../../cards";

interface TeamCardProps {
    name: string;
    position: string;
    pathImage: string;
    altImage: string;
    resumePerson: string;
}

export function TeamCard({ name, position, pathImage, altImage, resumePerson }: TeamCardProps) {
    return (
        <Card.Wrapper
            bgColor="primary"
            size="full"
            rounded="lg"
            className="flex flex-col gap-y-6 relative"
        >
            <div className="flex items-end gap-3 space-y-8">
                <img
                    src={pathImage}
                    alt={altImage}
                    className="min-w-24 w-[10vw]"
                />
                <div className="w-full h-full flex flex-col justify-between relative">
                    <Button
                        colorBG={"dark"}
                        rounded="full"
                        className="absolute top-0 right-0"
                    >
                        <Linkedin
                            color="#B9FF66"
                            size={18}
                        />
                    </Button>
                    <div className="flex-1 flex items-end">
                        <p className={`
                            ${paragraph({
                            size: "full",
                            alignTextMobile: "left"
                        })}
                        `}>
                            <span className="font-semibold">
                                {name}
                            </span>
                            <br />
                            {position}
                        </p>
                    </div>
                </div>
            </div>

            <div className="h-0.5 bg-zinc-300"></div>

            <p className={
                paragraph({
                    size: "full"
                })}
            >
                {resumePerson}
            </p>
        </Card.Wrapper>
    )
}
