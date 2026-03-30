import { ServiceCard, Title } from "@/components/ui";
import servicesData from "@/data/services.json";

function ServicesSection() {
  return (
    <section className="mt-30 scroll-mt-35" id="services">
      <Title className="mx-auto mb-14.5">Ce que je propose</Title>

      {/* ServiceCard container */}
      <div className="mx-auto mb-14.5 grid w-fit grid-cols-3 gap-24.25">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
