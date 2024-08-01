import { tv } from "tailwind-variants";

interface CardLogoProps{
    styleLogo: 'dark' | 'white'
}

export function CardLogo({styleLogo}: CardLogoProps) {
    const logo = tv({
        base: '',
        variants: {
            color: {
                white: '/public/assets/logoWhite.svg',
                dark: '/public/assets/logoDark.svg'
            }
        }, 
        defaultVariants:{
            color: 'dark'
        }
    })
    return (
        <img
            src={logo({color: styleLogo})}
            alt="Logo Positivus"
            className="w-36 md:w-56"
        />
    )
}