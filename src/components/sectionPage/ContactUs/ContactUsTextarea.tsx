import { TextareaHTMLAttributes } from "react"
import {twMerge} from "tailwind-merge"

interface ContactUsTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string
}

export function ContactUsTextarea({ title, ...rest }: ContactUsTextareaProps) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={title.toLowerCase()}>
                {title + (rest.required === true ? "*" : "")}
            </label>
            <textarea
                {...rest}
                id={title.toLowerCase()}
                placeholder={title}
                className={twMerge("rounded-xl px-8 py-4 border border-zinc-900 w-full h-[20vh] resize-none ", rest.className)}
            />
        </div>
    )
}