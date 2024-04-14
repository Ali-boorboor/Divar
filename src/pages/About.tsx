import MainFooter from "../components/molecules/MainFooter/MainFooter";
import MainMenuWithButton from "../components/molecules/MainMenuWithButton/MainMenuWithButton";
import AboutMain from "../components/organisms/AboutMain/AboutMain";

export default function About(): JSX.Element {
  document.title = "دربارهٔ دیوار";

  return (
    <section className="flex flex-col items-center">
      <MainMenuWithButton />
      <AboutMain />
      <MainFooter />
    </section>
  );
}
