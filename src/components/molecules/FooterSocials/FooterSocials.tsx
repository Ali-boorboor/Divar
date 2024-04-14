import { SiAparat } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function FooterSocials(): JSX.Element {
  return (
    <>
      <a href="#">
        <SiAparat className="w-5 h-5 text-gray cursor-pointer transition-all duration-300 hover:text-black" />
      </a>
      <a href="#">
        <FaLinkedin className="w-5 h-5 text-gray cursor-pointer transition-all duration-300 hover:text-black" />
      </a>
      <a href="#">
        <AiFillInstagram className="w-5 h-5 text-gray cursor-pointer transition-all duration-300 hover:text-black" />
      </a>
      <a href="#">
        <FaTwitter className="w-5 h-5 text-gray cursor-pointer transition-all duration-300 hover:text-black" />
      </a>
    </>
  );
};