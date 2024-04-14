// * import Home page components
import HomeHeader from "../components/organisms/Home/HomeHeader/HomeHeader";
import HomeMain from "../components/organisms/Home/HomeMain/HomeMain";
import HomeFooter from "../components/organisms/Home/HomeFooter/HomeFooter";

export default function Home(): JSX.Element {
  document.title = "دیوار";

  return (
    <section className="flex flex-col justify-center gap-10 my-10 max-w-container-size min-w-phone-size p-4">
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </section>
  );
}
