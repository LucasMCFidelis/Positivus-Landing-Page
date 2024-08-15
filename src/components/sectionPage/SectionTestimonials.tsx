import { ArrowLeft, ArrowRight, Sparkle } from "lucide-react";
import { Button } from "../button";
import { Card } from "../cards";
import { useState } from "react";

interface TestimonialsCardProps {
  id: number
  testimonial: string
  person: string
  position: string
}

export function SectionTestimonials() {
  const [cardFocus, setCardFocus] = useState<number>(1)
  
  const TestimonialsCard = ({ testimonial, person, position, id }: TestimonialsCardProps) => (
    <div className="max-w-lg lg:max-w-2xl p-8 bg-[#191A23] text-white relative">
      <div className={`border-2 ${cardFocus === id ? "border-[#B9FF66]" : "border-[#f3f3f3]"} rounded-2xl p-6`}>
        <p className="text-paragraph-mobile md:text-paragraph-desktop md:text">
          "{testimonial}"
        </p>
      </div>
      <div className={`bg-[#191A23] absolute w-10 h-10 border-2 ${cardFocus === id ? "border-[#B9FF66]" : "border-[#f3f3f3]"} border-t-transparent border-l-transparent rotate-45 left-20 bottom-24 rounded-md`}></div>
      <div className="mt-8">
        <p className="text-lg text-[#B9FF66]">{person}</p>
        <p className="text-sm text-gray-400">{position}</p>
      </div>
    </div>
  )
  
  function toggleTestimonial(id: number) {
    if (id < 0){
      setCardFocus(testimonials.length-1)
      return
    } else if (id > testimonials.length-1) {
      setCardFocus(0)
      return
    }
    setCardFocus(id)
  }

  const testimonials = [
    {
      testimonial: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      person: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      testimonial: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      person: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      testimonial: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      person: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
  ]

  return (
    <>
      <Card.Header
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        paragraphSize="md"
      />

      <Card.Wrapper bgColor="tertiary" className="p-3">
        <div className="flex">
          {testimonials.map((item, idx) => (
            <TestimonialsCard key={idx} id={idx} testimonial={item.testimonial} person={item.person} position={item.position} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Button
            colorBG={"dark"}
            className="flex items-center justify-center"
            onClick={() => toggleTestimonial(cardFocus - 1)}
          >
            <ArrowLeft />
          </Button>
          <div className="flex gap-2 items-center justify-between text-zinc-200">
            {testimonials.map((_, idx) => (
              <Button
                colorBG={"dark"}
                rounded="full"
                onClick={() => toggleTestimonial(idx)}
              >
                <Sparkle
                  key={idx}
                  size={window.innerWidth < 1024 ? "6vw" : "2vw"}
                  strokeWidth={3}
                  className={`${cardFocus === idx ? "text-[#B9FF66]" : ""} rotate-45`}
                />
              </Button>
            ))}
          </div>
          <Button
            colorBG={"dark"}
            className="flex items-center justify-center"
            onClick={() => toggleTestimonial(cardFocus + 1)}
          >
            <ArrowRight />
          </Button>
        </div>
      </Card.Wrapper>
    </>
  )
}