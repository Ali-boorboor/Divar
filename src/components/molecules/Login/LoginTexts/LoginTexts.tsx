export default function LoginTexts(props: any): JSX.Element {
  return (
    <>
      <h3 className="text-sm font-bold border-b border-zinc-300 py-8">{props.title}</h3>
      <p className="text-sm font-bold">{props.phoneText}</p>
      <p className="text-sm-300 text-gray font-medium">{props.text}</p>
    </>
  );
}
