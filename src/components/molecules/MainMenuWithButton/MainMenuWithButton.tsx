import { BsChat } from "react-icons/bs";
import MainMenu from "../MainMenu/MainMenu";
import Button from "../../atoms/Button/Button";

export default function MainMenuWithButton(props: any): JSX.Element {
  return (
    <MainMenu
    chat={
      <a href="#" className="hover:text-black flex items-center gap-1">
        <BsChat/>
        چت
      </a>
    }
    button={<Button title="ثبت آگهی" link={props.link ? props.link : "/product"}/>}
    category={props.category}
    search={props.search}
  />
  )
};