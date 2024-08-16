import { tv } from "tailwind-variants"
import { paragraph } from "../../app"

interface HeaderNavProps {
    direction: 'dynamic' | 'row',
    areaGrid?: string
}

export function HeaderNav({direction, areaGrid}: HeaderNavProps) {
    const nav = tv({
        base: 'space-y-4',
        variants: {
            direction: {
                dynamic: 'text-zinc-200 flex flex-col lg:items-baseline justify-center lg:flex-row lg:space-x-10',
                row: 'space-x-10 hidden text-xl xl:block' 
            }
        }
    })

    return (
        <nav className={`${nav({direction: direction})} ${paragraph({size: "lg", alignTextDesktop: "center"})} [grid-area:${areaGrid}]`}>
            <a>About Us</a>
            <a>Services</a>
            <a>Use Cases</a>
            <a>Pricing</a>
            <a>Blog</a>
        </nav>
    )
}