import { FaArrowLeft } from "react-icons/fa";

export default function SupportQuestionBox(props: any): JSX.Element {
  return (
    <a href="#" className="flex flex-col justify-between gap-2 ring-1 ring-zinc-300 p-2 rounded-sm">
      <div className="flex flex-col gap-2">
        <h4 className="text-black font-medium text-sm">{props.title}</h4>
        <p className="text-gray font-medium text-sm-300">{props.text}</p>
      </div>
      <p className="flex items-center text-red-800 font-medium text-sm-300 gap-1">
        ادامه مقاله
        <FaArrowLeft />
      </p>
    </a>
  );
};