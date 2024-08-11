import { Button } from "../button";
import { Card } from "../cards";

export function SectionContactUs() {
    return (
        <>
            <Card.Header
                title="Contact Us"
                description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
                paragraphSize="sm"
            />

            <Card.Wrapper bgColor="primary" border="none" rounded="lg" className="relative w-full grid grid-cols-1 lg:grid-cols-2">
                <form action="" className="flex flex-col text-paragraph-mobile lg:text-paragraph-desktop">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name"/>

                    <label htmlFor="email">Email*</label>
                    <input type="text" id="email" placeholder="Email"/>

                    <label htmlFor="message">Message*</label>
                    <input type="text" id="message" placeholder="Message"/>

                    <Button colorBG={"dark"} text="Send Message"  type="submit" />
                </form>
                <img src="/public/assets/contactUsImage.svg" alt="Contact Us" className="absolute hidden lg:block -right-80" />
            </Card.Wrapper>

        </>
    )
}