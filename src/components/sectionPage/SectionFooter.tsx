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
            className="flex flex-col items-center gap-9 lg:grid-areas-desktop-footer"
        >
            <Card.Logo styleLogo="white" size="md" areaGrid="logo" />
            <Card.Nav direction="dynamic" areaGrid="navBar"></Card.Nav>
            <div className="flex flex-col gap-3 justify-center items-center [grid-area:contact]">
                <h3 className="text-title-3-mobile lg:first-line:text-title-3-desktop text-center bg-[#B9FF66] px-3 rounded-xl font-semibold mb-7">Contact us:</h3>
                {contactUs.map((item) => (
                    <p className="text-paragraph-mobile md:text-paragraph-desktop text-center text-[#f3f3f3]">{item[0]}: {item[1]}</p>
                ))}
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4 justify-center items-center p-7 bg-[#292A32] rounded-2xl [grid-area:subscribe]">
                <input
                    placeholder="Email"
                    className={"rounded-xl px-8 py-4 border border-zinc-200 bg-transparent w-full h-[8vh]"}
                />
                <Button colorBG={"green"} text="Subscribe to news" className="lg:w-2/5" />
            </div>
            <div className="flex gap-3 justify-center items-center [grid-area:socialMedias]">
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
            <div className="w-full space-y-9 [grid-area:rightsReserved]">
                <div className="h-0.5 bg-zinc-200" />
                <p className="text-paragraph-mobile md:text-paragraph-desktop text-center text-[#f3f3f3]">© 2023 Positivus. All Rights Reserved.<br /> br
                    Privacy Policy</p>
            </div>
        </Card.Wrapper>
    )
}