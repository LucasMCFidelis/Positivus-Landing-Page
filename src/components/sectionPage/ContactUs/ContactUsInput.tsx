import { InputHTMLAttributes } from "react"
import { twMerge } from 'tailwind-merge'

interface ContactUsInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}

export function ContactUsInput ({ title, ...rest }: ContactUsInputProps) {
    return (
    <div className="flex flex-col gap-2">
        <label htmlFor={title.toLowerCase()}>
            {title + (rest.required === true ? "*" : "")}
        </label>
        <input
            {...rest}
            id={title.toLowerCase()}
            placeholder={title}
            className={twMerge("rounded-xl px-8 py-4 border border-zinc-900 w-full h-[8vh]", rest.className)}
        />
    </div>
    )
}