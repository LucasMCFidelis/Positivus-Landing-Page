import { useState } from "react";
import { Card } from "../cards";
import { Button } from "../button";
import { Minus, Plus } from "lucide-react";

export function SectionWorkingProcess() {
    const [isOpenCard, setIsOpenCard] = useState(false)
    let bgCard: "primary" | "secondary" = (isOpenCard ? "secondary" : "primary")
    function openCard() {
        setIsOpenCard(true)
    }
    function closeCard() {
        setIsOpenCard(false)
    }

    return (
        <>
            <Card.Header
                title="Our Working Process"
                description="Step-by-Step Guide to Achieving Your Business Goals"
                paragraphSize="sm"
            />
            <div className="space-y-8">
                <Card.Wrapper bgColor={bgCard}>
                    <div className="flex justify-between items-center gap-6">
                        <h2 className="text-title-2-mobile lg:text-title-2-desktop">
                            01
                        </h2>
                        <h3 className="text-title-3-mobile lg:text-title-3-desktop flex-1">
                            Consultation
                        </h3>
                        {isOpenCard ? (
                            <Button colorBG={"white"} rounded="full" onClick={closeCard}>
                                <Minus/>
                            </Button>
                        ) : (
                            <Button colorBG={"white"} rounded="full" onClick={openCard}>
                                <Plus/>
                            </Button>
                        )}
                    </div>
                </Card.Wrapper>
                <Card.Wrapper bgColor={bgCard}>
                    <div className="flex justify-between items-center gap-6">
                        <h2 className="text-title-2-mobile lg:text-title-2-desktop">
                            02
                        </h2>
                        <h3 className="text-title-3-mobile lg:text-title-3-desktop flex-1">
                            Research and Strategy Development
                        </h3>
                        {isOpenCard ? (
                            <Button colorBG={"white"} rounded="full" onClick={closeCard}>
                                <Minus/>
                            </Button>
                        ) : (
                            <Button colorBG={"white"} rounded="full" onClick={openCard}>
                                <Plus/>
                            </Button>
                        )}
                    </div>
                </Card.Wrapper>
            </div>
        </>
    )
}