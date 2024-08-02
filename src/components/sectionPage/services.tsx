import { Card } from "../cards";


export function Services() {
    return (
        <>
            <Card.Header
                title="Services"
                description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
                paragraphSize="lg"
            />
            <div className="w-full flex flex-wrap flex-col sm:flex-row y
      items-center justify-center gap-6">
                <Card.Service
                    title="Search engine optimization"
                    bgCard="primary" 
                    bgTitle="green"
                    styleLink="dark"
                    pathImage= "/public/assets/icons-services/search.svg"
                />
                <Card.Service
                    title="Pay-per-click advertising"
                    bgCard="secondary" 
                    bgTitle="white"
                    styleLink="dark"
                    pathImage="/public/assets/icons-services/advertising.svg"
                />
                <Card.Service
                    title="Social Media Marketing"
                    bgCard="tertiary" 
                    bgTitle="white"
                    styleLink="white"
                    pathImage="/public/assets/icons-services/marketing.svg"
                />
                <Card.Service
                    title="Email Marketing"
                    bgCard="primary" 
                    bgTitle="green"
                    styleLink="dark"
                    pathImage= "/public/assets/icons-services/email.svg"
                />
                <Card.Service
                    title="Content Creation"
                    bgCard="secondary" 
                    bgTitle="white"
                    styleLink="dark"
                    pathImage="/public/assets/icons-services/content-creation.svg"
                />
                <Card.Service
                    title="Analytics and Tracking"
                    bgCard="tertiary" 
                    bgTitle="green"
                    styleLink="white"
                    pathImage="/public/assets/icons-services/analytics.svg"
                />
            </div>
        </>
    )
}