import { ServiceCard, Title } from "@/components/ui";
import servicesData from "@/data/services.json";

function ServicesSection() {
  return (
    <section
      className="mt-10 scroll-mt-22 lg:mt-30 lg:scroll-mt-35"
      id="services"
    >
      <Title className="mx-auto mb-14.5">Ce que je propose</Title>

      {/* ServiceCard container */}
      <div className="mx-auto mb-14.5 flex w-[90vw] max-w-300 flex-wrap justify-center gap-12 lg:gap-24.25">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
