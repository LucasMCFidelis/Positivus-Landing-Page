import { useState } from "react";
import { Button } from "../button";
import { Card } from "../cards";
import { Header } from "../header";
import { Menu, X } from "lucide-react";

export function SectionHeaderMain() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    function openMenu() {
        setIsOpenMenu(true)
    }
    function closeMenu() {
        setIsOpenMenu(false)
    }
    const sizeButtons = window.innerWidth < 1024 ? '6vw' : '2vw'

    return (
        <Header.Root >
            <Card.Logo
                styleLogo="black"
                size="lg"
            />
            {window.innerWidth < 1024 ? (
                <div className="flex flex-col">
                    {isOpenMenu ? (
                        <div className="fixed inset-0 bg-black/80 flex items-start justify-end">
                            <Card.Wrapper bgColor="tertiary" size="sm" className="space-y-5 m-4 flex flex-col items-end">
                                <Button
                                    colorBG={"dark"}
                                    onClick={closeMenu}
                                    className="w-fit"
                                >
                                    <X size={sizeButtons}/>
                                </Button>
                                <Card.Nav direction="dynamic" />
                                <Button text={"Request a quotes"} colorBG={"white"} border={true}></Button>
                            </Card.Wrapper>
                        </div>
                    ) : (
                        <>
                            <Button
                                colorBG={"transparent"}
                                onClick={openMenu}
                                className="w-fit"
                            >
                                <Menu size={sizeButtons}/>
                            </Button>
                        </>
                    )}
                </div>
            ) : (
                <div className="flex items-center space-x-10">
                    <Card.Nav direction="row" />
                    <Button text={"Request a quotes"} colorBG={"transparent"} border={true} className="hidden lg:block"></Button>
                </div>
            )}
        </Header.Root>
    )
}