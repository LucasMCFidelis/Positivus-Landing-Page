import { ButtonHTMLAttributes } from "react"
import { tv } from "tailwind-variants"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  colorBG: "dark" | "green" | "transparent"
}

export function Button({ text, colorBG,...rest }: ButtonProps) {
  const button = tv({
    base: 'w-full lg:w-fit py-5 px-8 rounded-xl',
    variants: {
      color: {
        dark: 'bg-gray-900 text-gray-200',
        green: 'bg-[#B9FF66]',
        transparent: 'bg-transparent border-2 border-zinc-950'
      }
    },
    defaultVariants: {
      color: 'dark'
    }
  })
  return (
    <button
      {...rest}
      className={button({ color: colorBG })}
    >
      {text}
    </button>
  )
}

// "w-full lg:w-fit  py-5 px-8 rounded-xl"