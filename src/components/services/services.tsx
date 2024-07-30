import { Card } from "../cards";
import { ServiceCard } from "./ServiceCard";

export function Services() {
    return (
        <>
            <Card.Header
                title="Services"
                description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
            />
            <div className="w-full flex flex-wrap flex-col sm:flex-row y
      items-center justify-center gap-6">
                <ServiceCard
                    title="Search engine optimization"
                    bgCard="primary" 
                    bgTitle="green"
                    styleLink="dark"    
                />
                <ServiceCard
                    title="Search engine second"
                    bgCard="secondary" 
                    bgTitle="white"
                    styleLink="dark"    
                />
                <ServiceCard
                    title="Search engine second"
                    bgCard="tertiary" 
                    bgTitle="white"
                    styleLink="white"    
                />
            </div>
        </>
    )
}