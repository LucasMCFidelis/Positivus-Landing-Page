import { Header } from "../header";

export function SectionHeaderMain() {

    return (
        <Header.Root >
            <Header.Logo
                styleLogo="black"
                size="lg"
            />
            <Header.Menu/>
        </Header.Root>
    )
}