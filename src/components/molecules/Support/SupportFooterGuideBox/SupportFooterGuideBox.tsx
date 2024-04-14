export default function SupportFooterGuideBox(props: any): JSX.Element {
  return (
    <a href="#" className="flex flex-col gap-2 w-56">
      <h5 className="font-medium text-sm text-black">{props.title}</h5>
      <p className="font-medium text-sm-300 text-gray">{props.text}</p>
      <p className="font-medium text-sm-300 text-red-800">{props.link}</p>
    </a>
  );
};