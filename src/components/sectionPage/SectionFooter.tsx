import { Card } from "../cards";

export function SectionFooter() {
    return(
        <div className="bg-[#191A23] w-screen flex flex-col items-center">
            <Card.Logo styleLogo="white" size="md"/>
            <Card.Nav direction="dynamic" ></Card.Nav>
        </div>
    )
}