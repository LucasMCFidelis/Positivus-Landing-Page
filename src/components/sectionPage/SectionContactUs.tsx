import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Button } from "../button";
import { Card } from "../cards";
import { twMerge } from 'tailwind-merge'

interface ContactUsInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}

const ContactUsInput = ({ title, ...rest }: ContactUsInputProps) => (
    <div className="flex flex-col gap-2">
        <label htmlFor={title.toLowerCase()}>
            {title + (rest.required === true ? "*" : "")}
        </label>
        <input
            {...rest}
            id={title.toLowerCase()}
            placeholder={title}
            className={twMerge("rounded-xl px-8 py-4 border border-zinc-900 w-full h-[8vh] resize-none ", rest.className)}
        />
    </div>
)

interface ContactUsTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string
}

const ContactUsTextarea = ({ title, ...rest }: ContactUsTextareaProps) => (
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

export function SectionContactUs() {
    return (
        <>
            <Card.Header
                title="Contact Us"
                description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
                paragraphSize="sm"
            />

            <Card.Wrapper
                bgColor="primary"
                border="none"
                rounded="lg"
                className="relative w-full grid grid-cols-1 lg:grid-cols-2"
            >
                <form action="" className="flex flex-col text-paragraph-mobile lg:text-paragraph-desktop gap-5 lg:p-8">
                    <ContactUsInput
                        title={"Name"}
                    />
                    <ContactUsInput
                        title={"Email"}
                        required
                    />
                    <ContactUsTextarea
                        title={"Message"}
                        required
                    />

                    <Button
                        colorBG={"dark"}
                        text="Send Message"
                        type="submit"
                    />
                </form>
                <img
                    src="/public/assets/contactUsImage.svg"
                    alt="Contact Us"
                    className="absolute hidden h-4/5 w-3/5 lg:block top-[10%] -right-[28%]"
                />
            </Card.Wrapper>
        </>
    )
}