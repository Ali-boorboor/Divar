// * imports for header section of Home page
import DivarLogo from "../../../atoms/DivarLogo/DivarLogo";
// * navbar ( m e n u ) component of Home page
import HomeNavbar from "../../../molecules/Home/HomeNavbar/HomeNavbar";

export default function HomeHeader(): JSX.Element {
  return (
    <section className="flex flex-col items-center">
      <DivarLogo width="w-16" height="h-16" />
      <HomeNavbar />
    </section>
  );
}