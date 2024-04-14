// * FooterBadge is the component which will provide enamad & ... icons style
import FooterImageBadge from "../../../atoms/FooterImageBadge/FooterImageBadge";
import FooterSocials from "../../../molecules/FooterSocials/FooterSocials";

// * the Footer Section of Home page
export default function HomeFooter(): JSX.Element {
  return (
    <section className="flex flex-col gap-4">
      <section className="flex justify-center gap-4 pb-6 border-b border-b-zinc-300 w-full">
        <FooterImageBadge img="/img/jpg/enamad-logo.jpg" />
        <FooterImageBadge img="/img/png/valid-logo.png" />
        <FooterImageBadge img="/img/png/enamad-valid-logo.png" />
      </section>
      <section className="flex flex-row-reverse w-full justify-center gap-6 mt-4">
        <FooterSocials />
      </section>
    </section>
  );
}