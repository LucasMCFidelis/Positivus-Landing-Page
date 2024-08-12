import { Card } from "../cards";

const TestimonialsCard = () => (
  <div className="max-w-lg lg:max-w-2xl p-8 bg-[#191A23] text-white relative">
    <div className="border-2 border-[#B9FF66] rounded-2xl p-6">
      <p className="text-paragraph-mobile md:text-paragraph-desktop md:text">
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
      </p>
    </div>
    <div className="bg-[#191A23] absolute w-10 h-10 border-2 border-[#B9FF66] border-t-transparent border-l-transparent rotate-45 left-20 bottom-24 rounded-md"></div>
    <div className="mt-8">
      <p className="text-lg text-[#B9FF66]">John Smith</p>
      <p className="text-sm text-gray-400">Marketing Director at XYZ Corp</p>
    </div>
  </div>
)

export function SectionTestimonials() {
  return (
    <>
      <Card.Header
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        paragraphSize="md"
      />

      <Card.Wrapper bgColor="tertiary" className="p-3">
        <TestimonialsCard/>

      </Card.Wrapper>
    </>
  )
}