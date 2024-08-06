import { tv } from 'tailwind-variants'
import { CardWrapper } from './CardWrapper'

interface CardServiceProps {
    title: string
    bgCard: "primary" | "secondary" | "tertiary" | undefined
    bgTitle: "white" | "green" | undefined
    styleLink: "white" | "dark" | undefined
    pathImage: string
}

export function CardService({ title, bgCard, bgTitle, styleLink, pathImage }: CardServiceProps) {
    function splitTitle(title: string): [string, string] {
        const lastSpaceIndex = title.lastIndexOf(' ');
        if (lastSpaceIndex === -1) {
            return ["", title];
        }

        const firstPart = title.substring(0, lastSpaceIndex);
        const lastPart = title.substring(lastSpaceIndex + 1);

        return [firstPart, lastPart];
    }
    const [first, last] = splitTitle(title);

    const item = tv({
        slots: {
            base: 'min-w-80 max-w-full space-x-7 space-y-7 rounded-xl justify-items-start items-baseline grid-areas-mobile-service p-6 lg:grid-areas-desktop-service lg:h-80 lg:w-[550px] lg:items-center lg:px-14 border border-base shadow-base',
            titleWrapper: '[grid-area:title] text-title-3-mobile md:text-title-3-desktop font-semibold',
            titleContent: 'rounded-lg py-0.5 px-2 w-fit',
            linkContent: '[grid-area:link] flex items-center gap-3',
            linkBackground: '',
            linkArrow: ''
        },
        variants: {
            
            bgTitle: {
                white: {
                    titleContent: 'bg-[#f3f3f3]'
                },
                green: {
                    titleContent: 'bg-[#B9FF66]'
                }
            },
            styleLink: {
                white: {
                    linkContent: 'text-[#f3f3f3]',
                    linkBackground: '#f3f3f3',
                    linkArrow: '#191A23'
                },
                dark: {
                    linkContent: 'text-[#191A23]',
                    linkBackground: '#191A23',
                    linkArrow: '#B9FF66'
                }
            }
        }
    })

    const {
        base,
        titleWrapper,
        titleContent,
        linkContent,
        linkBackground,
        linkArrow,


    } = item({bgTitle, styleLink });

    return (
        <>
            <CardWrapper bgColor={bgCard} size='md' className={base()}>
                <div className={titleWrapper()}>
                    <h2 className={titleContent()}>
                        {first}
                    </h2>
                    <h2 className={titleContent()}>
                        {last}
                    </h2>
                </div>
                <a href="#" target="_blank" className={linkContent()}>
                    <svg className="size-6 lg:size-10" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20.5" cy="20.5" r="20.5" fill={linkBackground()} />
                        <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill={linkArrow()} />
                    </svg>
                    <p className="text-paragraph-mobile lg:text-paragraph-desktop hidden sm:block">Learn more</p>
                </a>
                <div className="[grid-area:image]"><img src={pathImage} alt="" /></div>
            </CardWrapper>
        </>
    )
}