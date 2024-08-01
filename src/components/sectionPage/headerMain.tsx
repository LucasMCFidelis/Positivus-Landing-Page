import { Button } from "../button";
import { Card } from "../cards";
import { Header } from "../header";

export function HeaderMain() {
    return (
            <Header.Root>
                <Card.Logo
                    styleLogo="dark"
                />
                <div className="flex items-center space-x-10">
                    <Header.Nav/>
                    <Button text={"Request a quotes"} colorBG={"transparent"}></Button>
                </div>
            </Header.Root>
    )
}