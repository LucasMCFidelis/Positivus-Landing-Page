interface TestimonialsCardProps {
    id: number
    testimonial: string
    person: string
    position: string
    cardFocus: number
}

export function TestimonialsCard({ testimonial, person, position, id, cardFocus }: TestimonialsCardProps) {
    const cardBaseStyle = "w-[80vw] lg:w-[60vw] p-8 bg-[#191A23] text-white relative"
    const cardBorderStyles = (cardFocus === id) ? "border-[#B9FF66]" : "border-[#f3f3f3]"

    return (
        <div
            className={`${cardBaseStyle} ${cardFocus === id ? "block" : "hidden lg:block"}`}
        >
            <div className={`border-2 ${cardBorderStyles} rounded-2xl p-6 h-[40vh] lg:h-[30vh]`}>
                <p className="text-paragraph-mobile md:text-paragraph-desktop h-[98%] overflow-y-auto">
                    "{testimonial}"
                </p>
            </div>
            <div className={`bg-[#191A23] absolute w-10 h-10 border-2 ${cardBorderStyles} border-t-transparent border-l-transparent rotate-45 left-20 bottom-24 rounded-md`} />
            <div className="mt-8">
                <p className="text-lg text-[#B9FF66]">
                    {person}
                </p>
                <p className="text-sm text-gray-400">
                    {position}
                </p>
            </div>
        </div>
    )
}