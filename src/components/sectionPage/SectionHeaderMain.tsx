import { Button } from "../button";
import { Card } from "../cards";
import { Header } from "../header";

export function SectionHeaderMain() {
    return (
            <Header.Root>
                <Card.Logo
                    styleLogo="black"
                    size="lg"
                />
                <div className="flex items-center space-x-10">
                    <Card.Nav direction="row"/>
                    <Button text={"Request a quotes"} colorBG={"transparent"}></Button>
                </div>
            </Header.Root>
    )
}