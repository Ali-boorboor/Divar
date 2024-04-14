// * the question part which is located at the bottom of your question section
import SupportBottomQuestions from "../../../molecules/Support/SupportBottomQuestions/SupportBottomQuestions";
// * the question part that provides four question
import SupportQuestions from "../../../molecules/Support/SupportQuestions/SupportQuestions";

// * the main section of Support page
export default function SupportMain(): JSX.Element {
  return (
    <main className="flex flex-col justify-center items-center p-4 gap-16 max-w-container-medium m-auto">
      <SupportQuestions />
      <SupportBottomQuestions />
    </main>
  );
}
