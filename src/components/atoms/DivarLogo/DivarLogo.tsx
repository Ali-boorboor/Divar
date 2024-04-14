import { Link } from "react-router-dom";

// * this component will get two properties when called ( w i d t h  &  h e i g h t  ) 
export default function DivarLogo(props: any): JSX.Element {
  return (
    <Link to="/">
      <img
        src="/img/svg/divar-logo.svg"
        alt="divar-logo"
        className={`${props.width} ${props.height} object-cover`}
      />
    </Link>
  );
};