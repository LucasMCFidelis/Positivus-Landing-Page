import { ButtonHTMLAttributes, ReactNode } from "react"
import { tv } from "tailwind-variants"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorBG: "dark" | "green" | "white" | "transparent"
  rounded?: "sm" | "full"
  border?: boolean
  children?: ReactNode
}

export function Button({ colorBG, rounded, border, children, className, ...rest }: ButtonProps) {
  const button = tv({
    base: 'text-paragraph-mobile lg:text-paragraph-desktop',
    variants: {
      color: {
        dark: 'bg-[#191A23] text-gray-200',
        green: 'bg-[#B9FF66]',
        white: 'bg-[#f3f3f3]',
        transparent: 'bg-transparent'
      },
      rounded: {
        sm: 'rounded-xl py-5 px-8 w-full lg:w-fit ',
        full: 'rounded-full p-2'
      },
      border: {
        true: 'border-2 border-zinc-950',
        false: 'border-none'
      }
    },
    defaultVariants: {
      color: 'dark',
      rounded: 'sm',
      border: false
    }
  })
  return (
    <button
      {...rest}
      className={twMerge(button({ color: colorBG, rounded: rounded, border: border }), className, rest.disabled === true ? "opacity-50" : "")}
    >
      {children}
    </button>
  )
}