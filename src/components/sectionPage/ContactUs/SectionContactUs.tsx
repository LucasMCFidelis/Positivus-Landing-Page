import { Button } from "../../button";
import { Card } from "../../cards";
import { ContactUsInput } from "./ContactUsInput";
import { ContactUsTextarea } from "./ContactUsTextarea";

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
                        type="submit"
                    >
                        Send Message
                    </Button>
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