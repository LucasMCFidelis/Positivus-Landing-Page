import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "../button";
import { Card } from "../cards";

export function SectionFooter() {
    const contactUs = [
        ["Email", "info@positivus.com"],
        ["Phone", "5555678901"],
        ["Address", "1234 Main St Moonstone City, Stardust State 12345"]
    ]
    return (
        <Card.Wrapper
            bgColor="tertiary"
            size="full"
            rounded={innerWidth < 1024 ? "none" : "lgTop"}
            className="flex flex-col items-center gap-5"
        >
            <Card.Logo styleLogo="white" size="md" />
            <Card.Nav direction="dynamic" ></Card.Nav>
            <div className="flex flex-col gap-3 justify-center items-center">
                <h3 className="text-title-3-mobile lg:first-line:text-title-3-desktop text-center bg-[#B9FF66] px-3 rounded-xl font-semibold mb-7">Contact us:</h3>
                {contactUs.map((item) => (
                    <p className="text-paragraph-mobile md:text-paragraph-desktop text-center text-[#f3f3f3]">{item[0]}: {item[1]}</p>
                ))}
            </div>
            <div className="flex gap-3 justify-center items-center">
                <Button colorBG={"white"} rounded="full" className="" >
                    <Linkedin color="#191A23" size={18} />
                </Button>
                <Button colorBG={"white"} rounded="full" className="" >
                    <Facebook color="#191A23" size={18} />
                </Button>
                <Button colorBG={"white"} rounded="full" className="" >
                    <Twitter color="#191A23" size={18} />
                </Button>
            </div>
            <div className="h-0.5 w-full bg-zinc-200" />
            <div className="">
                <p className="text-paragraph-mobile md:text-paragraph-desktop text-center text-[#f3f3f3]">© 2023 Positivus. All Rights Reserved.<br /> br
                    Privacy Policy</p>
            </div>
        </Card.Wrapper>
    )
}