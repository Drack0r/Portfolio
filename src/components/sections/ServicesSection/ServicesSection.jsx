"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { ServiceCard, Title } from "@/components/ui";
import { pop } from "@/variants/animation";

function ServicesSection({ services = [] }) {
  return (
    <section
      className="mt-10 scroll-mt-22 lg:mt-30 lg:scroll-mt-35"
      id="services"
    >
      <Title className="mx-auto mb-14.5">Ce que je propose</Title>

      {/* ServiceCard container */}
      <div className="mx-auto mb-14.5 flex w-[90vw] max-w-300 flex-wrap justify-center gap-12 lg:gap-24.25">
        {services.map((service, index) => (
          <RevealOnScroll key={service._id} variant={pop} delay={index}>
            <ServiceCard service={service} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
