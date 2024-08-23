import { Minus, Plus } from "lucide-react"
import { paragraph } from "../../../app"
import { Button } from "../../button"
import { Card } from "../../cards"

interface WorkingProcessCardProps {
    indexCard: number
    step: string
    description: string
    openCardIndex: number | null
    toggleCard: (index: number) => void
}

export function WorkingProcessCard({ indexCard, step, description, openCardIndex, toggleCard }: WorkingProcessCardProps) {


    return (
        <Card.Wrapper
            bgColor={openCardIndex === indexCard ? "secondary" : "primary"}
            className="space-y-4"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6 w-4/5">
                    <h2 className="text-title-2-mobile lg:text-title-2-desktop">
                        {(indexCard + 1).toString().padStart(2, '0')}
                    </h2>
                    <h3 className="text-title-3-mobile lg:text-title-3-desktop flex-1">
                        {step}
                    </h3>
                </div>
                <Button
                    colorBG={"white"}
                    rounded="full"
                    onClick={() => toggleCard(indexCard)}
                    border={true}
                >
                    {openCardIndex === indexCard ? <Minus /> : <Plus />}
                </Button>
            </div>
            {openCardIndex === indexCard && (
                <>
                    <div className="h-0.5 w-full bg-zinc-900"></div>
                    <p className={
                        paragraph({
                            size: "full"
                        })
                    }>
                        {description}
                    </p>
                </>
            )}
        </Card.Wrapper>
    )
}