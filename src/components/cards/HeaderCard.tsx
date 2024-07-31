import { tv } from "tailwind-variants"

interface HeaderCardProps{
    title: string,
    description: string
    paragraphSize?: "full" | "sm" | "md" | "lg" | undefined
}

export function HeaderCard({title, description, paragraphSize}: HeaderCardProps) {
    const paragraph = tv({
        base: 'text-paragraph-mobile lg:text-paragraph-desktop',
        variants: {
            size: {
                sm: 'w-[310px]',
                md: 'w-[470px]',
                lg: 'w-[575px]',
                full: 'w-full'
            }
        },
        defaultVariants:{
            size: 'full'
        }
    })
    return (
        <div className="flex flex-col items-center justify-start gap-5 md:gap-10 mb-20 md:flex-row">
            <h2 className="text-title-2-mobile md:text-title-2-desktop bg-lime-400 rounded-lg px-2 font-semibold text-nowrap ">
                {title}
            </h2>
            <p className={paragraph({ size: paragraphSize })}>
                {description}
            </p>
        </div>
    )
}