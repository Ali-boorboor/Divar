import AboutDivarSection from "../../molecules/About/AboutDivarSection/AboutDivarSection";
import AddressSection from "../../molecules/About/AddressSection/AddressSection";
import CareerOpportunitySection from "../../molecules/About/CareerOpportunitySection/CareerOpportunitySection";
import ContactDivarSection from "../../molecules/About/ContactDivarSection/ContactDivarSection";
import WorkMateSection from "../../molecules/About/WorkMateSection/WorkMateSection";

export default function AboutMain(): JSX.Element {
  return (
    <main className="flex flex-col gap-6 mt-20">
      <AboutDivarSection />
      <WorkMateSection />
      <CareerOpportunitySection />
      <section className="max-w-container-size m-auto">
        <ContactDivarSection />
        <AddressSection />
      </section>
    </main>
  );
}