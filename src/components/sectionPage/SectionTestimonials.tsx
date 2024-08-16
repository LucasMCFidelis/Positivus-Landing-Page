import { ArrowLeft, ArrowRight, Sparkle } from "lucide-react";
import { Button } from "../button";
import { Card } from "../cards";
import { useRef, useState } from "react";

interface TestimonialsCardProps {
  id: number
  testimonial: string
  person: string
  position: string
}

export function SectionTestimonials() {
  const [cardFocus, setCardFocus] = useState<number>(0)
  
  const TestimonialsCard = ({ testimonial, person, position, id }: TestimonialsCardProps) => {
    const cardBaseStyle = "w-[80vw] lg:w-[60vw] p-8 bg-[#191A23] text-white relative"
    const cardBorderStyles = (cardFocus === id) ? "border-[#B9FF66]" : "border-[#f3f3f3]"

    return (
      <div
        className={`${cardBaseStyle} ${cardFocus === id ? "block" : "hidden lg:block"}`}
      >
        <div className={`border-2 ${cardBorderStyles} rounded-2xl p-6 h-[40vh] lg:h-[30vh]`}>
          <p className="text-paragraph-mobile md:text-paragraph-desktop h-[98%] overflow-y-auto">
            "{testimonial}"
          </p>
        </div>
        <div className={`bg-[#191A23] absolute w-10 h-10 border-2 ${cardBorderStyles} border-t-transparent border-l-transparent rotate-45 left-20 bottom-24 rounded-md`}/>
        <div className="mt-8">
          <p className="text-lg text-[#B9FF66]">{person}</p>
          <p className="text-sm text-gray-400">{position}</p>
        </div>
      </div>
    )
  }

  function toggleTestimonial(id: number) {
    setCardFocus(id)
  }

  const testimonials = [
    {
      testimonial: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      person: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum, temporibus optio error repellendus eius ipsam vero minus et illo magni alias fuga modi quibusdam recusandae maiores nemo quia adipisci!",
      person: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum, temporibus optio error repellendus eius ipsam vero minus et illo magni alias fuga modi quibusdam recusandae maiores nemo quia adipisci!",
      person: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum, temporibus optio error repellendus eius ipsam vero minus et illo magni alias fuga modi quibusdam recusandae maiores nemo quia adipisci!",
      person: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum, temporibus optio error repellendus eius ipsam vero minus et illo magni alias fuga modi quibusdam recusandae maiores nemo quia adipisci repellendus eius ipsam vero minus et illo magni alias fuga modi quibusdam recusandae maiores nemo quia adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum, temporibus optio error repellendus eius ipsam vero minus et illo magni alias fuga modi quibusdam recusandae maiores nemo quia adipisci!",
      person: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
  ]

  const isPrevDisabled = (cardFocus === 0)
  const isNextDisabled = (cardFocus === testimonials.length - 1)
  const sizeButtons = window.innerWidth < 1024 ? '6vw' : '2vw'

  return (
    <>
      <Card.Header
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        paragraphSize="md"
      />

      <Card.Wrapper bgColor="tertiary" className="p-3">
        <div className="overflow-x-hidden w-auto">
          <div className="w-max lg:ml-[15%]"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${testimonials.length}, 1fr)`,
              transform:
                window.innerWidth >= 1024
                  ? `translateX(-${cardFocus * (100 / testimonials.length)}%)`
                  : "none",
              transition: "transform 0.5s",
            }}
          >
            {testimonials.map((item, idx) => (
              <TestimonialsCard
                key={idx}
                id={idx}
                testimonial={item.testimonial}
                person={item.person}
                position={item.position}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button
            colorBG={"dark"}
            className={"w-1/4"}
            onClick={() => toggleTestimonial(cardFocus - 1)}
            disabled={isPrevDisabled}
          >
            <ArrowLeft size={sizeButtons} />
          </Button>
          <div className="flex gap-2 items-center justify-center text-zinc-200">
            {testimonials.map((_, idx) => (
              <Button
                key={idx}
                colorBG={"dark"}
                rounded="full"
                onClick={() => toggleTestimonial(idx)}
              >
                <Sparkle
                  size={sizeButtons}
                  strokeWidth={7}
                  className={`${cardFocus === idx ? "text-[#B9FF66]" : ""} rotate-45`}
                />
              </Button>
            ))}
          </div>
          <Button
            colorBG={"dark"}
            className={"w-1/4"}
            onClick={() => toggleTestimonial(cardFocus + 1)}
            disabled={isNextDisabled}
          >
            <ArrowRight size={sizeButtons}/>
          </Button>
        </div>
      </Card.Wrapper>
    </>
  )
}