// * the box section that you can communicate supporter with
import SupportContactBox from "../../../molecules/Support/SupportContactBox/SupportContactBox";
// * the footer boxes which can help you to answer some questions
import SupportFooterGuide from "../../../molecules/Support/SupportFooterGuide/SupportFooterGuide";
import MainFooter from "../../../molecules/MainFooter/MainFooter";

// * the footer section of Support page 
export default function SupportFooter(): JSX.Element {
  return (
    <footer className="flex flex-col items-center justify-center gap-10 max-w-container-medium m-auto">
      <SupportContactBox />
      <SupportFooterGuide />
      <MainFooter />
    </footer>
  );
}
