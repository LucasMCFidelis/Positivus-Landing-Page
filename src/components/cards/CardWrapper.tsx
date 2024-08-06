import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'
import clsx from 'clsx'

interface CardWrapperProps {
    bgColor?: "primary" | "secondary" | "tertiary" | undefined
    size?: "sm" | "md" | "lg" | "full" 
    rounded?: "sm" | "lg"
    className?: string
    children: ReactNode
}

export function CardWrapper({ bgColor, size, rounded, children, className}: CardWrapperProps) {
    const item = tv({
        base: 'p-6 lg:px-14 border border-base shadow-base',

        variants: {
            bgCard: {
                primary: 'bg-[#f3f3f3]',
                secondary: 'bg-[#B9FF66]',
                tertiary: 'bg-[#191A23]'
            },
            heightCard: {
                sm: '',
                md: 'w-1/2',
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
        <div className={clsx(item({ bgCard: bgColor, heightCard: size, roundedCard: rounded }), className)}>
            {children}
        </div>
    )
}