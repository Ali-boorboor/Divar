// * imported components for Support page
import SupportHeader from "../components/organisms/Support/SupportHeader/SupportHeader";
import SupportMain from "../components/organisms/Support/SupportMain/SupportMain";
import SupportFooter from "../components/organisms/Support/SupportFooter/SupportFooter";

// * Support page
export default function Support(): JSX.Element {
  document.title = "مرکز پشتیبانی دیوار";

  return (
    <>
      <SupportHeader />
      <SupportMain />
      <SupportFooter />
    </>
  );
}