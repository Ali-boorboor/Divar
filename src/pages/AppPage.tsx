import AppMainSection from "../components/molecules/AppMainSection/AppMainSection";
import MainFooter from "../components/molecules/MainFooter/MainFooter";
import MainMenuWithButton from "../components/molecules/MainMenuWithButton/MainMenuWithButton";


export default function AppPage(): JSX.Element {
  document.title = "دانلود اپلیکیشن دیوار";

  return (
    <section className="flex flex-col items-center">
      <MainMenuWithButton/>
      <AppMainSection />
      <MainFooter />
    </section>
  );
}