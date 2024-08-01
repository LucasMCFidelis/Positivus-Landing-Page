import { ReactNode } from "react";

interface HeaderRootProps{
    children: ReactNode
}

export function HeaderRoot({children}: HeaderRootProps) {
    return (
        <header className="w-full h-auto flex justify-between items-center mt-7 sm:mt-14">
            {children}
        </header>
    )
}