interface HeaderCardProps{
    title: string,
    description: string
}

export function HeaderCard({title, description}: HeaderCardProps) {
    return (
        <div className="flex flex-col items-center justify-start gap-5 md:gap-10 mb-20 md:flex-row">
            <h2 className="text-title-2-mobile md:text-title-2-desktop bg-lime-400 rounded-lg p-2 font-semibold">
                {title}
            </h2>
            <p className="text-paragraph-mobile lg:text-paragraph-desktop w-fit max-w-xl">
                {description}
            </p>
        </div>
    )
}