import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface CardWrapperProps {
    bgColor: "primary" | "secondary" | "tertiary" | undefined
    size: "sm" | "md" | "lg" | "full" 
    children: ReactNode
}

export function CardWrapper({ bgColor, size, children }: CardWrapperProps) {
    const item = tv({
        base: 'min-w-80 max-w-full space-x-7 space-y-7 rounded-xl justify-items-start items-baseline grid-areas-mobile-service p-6 lg:grid-areas-desktop-service lg:h-80 lg:w-[550px] lg:items-center lg:px-14 border border-base shadow-base',

        variants: {
            bgCard: {
                primary: 'bg-[#f3f3f3]',
                secondary: 'bg-[#B9FF66]',
                tertiary: 'bg-[#191A23]'
            },
            sizeCard: {
                sm: '',
                md: '',
                lg: '',
                full: 'w-full'
            }
        }
    })

    return (
        <div className={item({bgCard: bgColor, sizeCard: size})}>
            {children}
        </div>
    )
}