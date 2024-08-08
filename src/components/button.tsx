import { ButtonHTMLAttributes, ReactNode } from "react"
import { tv } from "tailwind-variants"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string,
  colorBG: "dark" | "green" | "white" | "transparent"
  rounded?: "sm" | "full"
  children?: ReactNode
}

export function Button({ text, colorBG, rounded, children, className, ...rest }: ButtonProps) {
  const button = tv({
    base:`w-full lg:w-fit text-xl text-paragraph-mobile lg:text-paragraph-desktop`,
    variants: {
      color: {
        dark: 'bg-[#191A23] text-gray-200',
        green: 'bg-[#B9FF66]',
        white: 'bg-[#f3f3f3] border-2 border-zinc-950',
        transparent: 'bg-transparent border-2 border-zinc-950'
      },
      rounded: {
        sm: 'rounded-xl py-5 px-8 ',
        full: 'rounded-full p-2'
      }
    },
    defaultVariants: {
      color: 'dark',
      rounded: 'sm'
    }
  })
  return (
    <button
      {...rest}
      className={twMerge(button({ color: colorBG, rounded: rounded }), className)}
    >
      {text} 
      {children}
    </button>
  )
}