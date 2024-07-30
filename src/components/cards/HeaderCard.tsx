interface HeaderCardProps{
    title: string,
    description: string
}

export function HeaderCard({title, description}: HeaderCardProps) {
    return (
        <div className="flex flex-col items-center justify-start gap-5 md:gap-10 mb-20 md:flex-row lg:w- lg:max-w-[66%]">
            <h2 className="text-title-2-mobile md:text-title-2-desktop bg-lime-400 rounded-lg px-2 font-semibold">
                {title}
            </h2>
            <p className="text-paragraph-mobile lg:text-paragraph-desktop flex-1 ">
                {description}
            </p>
        </div>
    )
}