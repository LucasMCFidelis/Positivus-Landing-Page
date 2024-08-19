import { X, Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "../button"
import { Card } from "../cards"
import { Header } from "."

export function HeaderMenu() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const toggleMenu = () => {
        setIsOpenMenu((prev) => !prev)
    }
    const sizeButtons = window.innerWidth < 1024 ? '6vw' : '2vw'

    return (
        <>
            {window.innerWidth < 1024 ? (
                <div className="flex flex-col">
                    {isOpenMenu ? (
                        <div className="fixed inset-0 bg-black/80 flex items-start justify-end">
                            <Card.Wrapper bgColor="tertiary" size="sm" className="space-y-5 m-4 flex flex-col items-end">
                                <Button
                                    colorBG={"dark"}
                                    onClick={toggleMenu}
                                    className="w-fit"
                                >
                                    <X size={sizeButtons} />
                                </Button>
                                <Header.Nav direction="dynamic" />
                                <Button colorBG={"white"} border={true}>
                                    Request a quotes
                                </Button>
                            </Card.Wrapper>
                        </div>
                    ) : (
                        <>
                            <Button
                                colorBG={"transparent"}
                                onClick={toggleMenu}
                                className="w-fit"
                            >
                                <Menu size={sizeButtons} />
                            </Button>
                        </>
                    )}
                </div>
            ) : (
                <div className="flex items-center space-x-10">
                    <Header.Nav direction="row" />
                    <Button colorBG={"transparent"} border={true} className="hidden lg:block">
                        Request a quotes
                    </Button>
                </div>
            )}
        </>
    )
}