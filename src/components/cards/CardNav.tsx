import { tv } from "tailwind-variants"
import { paragraph } from "../../app"

export function CardNav({direction}: {direction: 'dynamic' | 'row'}) {
    const nav = tv({
        base: '',
        variants: {
            direction: {
                dynamic: 'text-zinc-200 text-base flex flex-col items-center lg:flex-row lg:space-x-10 lg:text-xl',
                row: 'space-x-10 hidden text-xl xl:block' 
            }
        }
    })

    return (
        <nav className={`${nav({direction: direction})} ${paragraph({size: "lg", alignTextDesktop: "center"})}`}>
            <a>About Us</a>
            <a>Services</a>
            <a>Use Cases</a>
            <a>Pricing</a>
            <a>Blog</a>
        </nav>
    )
}