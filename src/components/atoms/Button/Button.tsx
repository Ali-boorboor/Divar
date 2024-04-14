import { Link } from "react-router-dom";

export default function Button(props: any): JSX.Element {
  return (
    <Link to={props.link}>
      <button
        type={props.type}
        className={`whitespace-nowrap py-2 px-3 ${props.width} text-white font-medium text-xs bg-red-800 transition-all duration-300 rounded-md hover:bg-red-700`}
      >
        {props.title}
      </button>
    </Link>
  );
}