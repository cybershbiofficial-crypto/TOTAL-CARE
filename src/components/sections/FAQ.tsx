import { RevealBlock } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you supply labour for both short-term and long-term projects?",
    answer:
      "Yes. We offer flexible deployment models ranging from emergency short-term labour supply to multi-year contracts for massive commercial projects, fully compliant with UAE labour laws.",
  },
  {
    question: "Are your technicians and tradesmen certified?",
    answer:
      "Absolutely. All our specialized tradesmen (electricians, plumbers, welders) carry relevant certifications. We stringently vet and train our workforce to adhere to ISO and local municipality standards.",
  },
  {
    question: "Do you manage the entire renovation process?",
    answer:
      "Yes. We provide turnkey solutions. From initial demolition and MEP works to final high-end finishes, our project managers handle every aspect, giving you a single point of accountability.",
  },
  {
    question: "Do you offer warranties on your renovation and fit-out work?",
    answer:
      "Yes. We offer robust warranties on our workmanship, including up to 10 years on waterproofing and structural works, ensuring total peace of mind long after handover.",
  },
  {
    question: "How quickly can you deploy a workforce?",
    answer:
      "Depending on the scale and specific trade requirements, we can mobilize our workforce to your site within 24 to 48 hours for standard requirements.",
  },
];

export function FAQ() {
  return (
    <section className="relative bg-background py-10 md:py-14 lg:py-18">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <RevealBlock>
          <div className="text-center text-mono-xs font-medium uppercase tracking-widest text-accent">
            FAQ
          </div>
          <h2 className="mt-6 text-center text-display-md text-foreground">Common Inquiries</h2>
        </RevealBlock>

        <RevealBlock delay={200} className="mt-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-line/60 bg-surface/30 px-6 transition-colors hover:border-accent/40 data-[state=open]:border-accent/60 data-[state=open]:bg-surface"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-mute">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealBlock>
      </div>
    </section>
  );
}
