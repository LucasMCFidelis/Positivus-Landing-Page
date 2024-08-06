import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface CardWrapperProps {
    bgColor?: "primary" | "secondary" | "tertiary" | undefined
    size?: "sm" | "md" | "lg" | "full" 
    rounded?: "sm" | "lg"
    children: ReactNode
}

export function CardWrapper({ bgColor, size, rounded, children }: CardWrapperProps) {
    const item = tv({
        base: 'w-full justify-items-start items-baseline p-6  lg:items-center lg:px-14 border border-base shadow-base',

        variants: {
            bgCard: {
                primary: 'bg-[#f3f3f3]',
                secondary: 'bg-[#B9FF66]',
                tertiary: 'bg-[#191A23]'
            },
            heightCard: {
                sm: '',
                md: '',
                lg: 'h-min lg:h-80',
                full: 'h-full'
            },
            roundedCard: {
                sm: 'rounded-xl',
                lg: 'rounded-[45px]'
            }
        },
        defaultVariants: {
            bgCard: 'primary',
            heightCard: 'full',
            roundedCard: 'sm'
        }
    })

    return (
        <div className={item({bgCard: bgColor, heightCard: size, roundedCard: rounded}) }>
            {children}
        </div>
    )
}