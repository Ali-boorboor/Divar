import Form from "../components/organisms/Form/Form";
import LoginTexts from "../components/molecules/Login/LoginTexts/LoginTexts";
import Button from "../components/atoms/Button/Button";
import swal from "sweetalert";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { passwordInput, phoneInput } from "../utils/recoilStateManager";
import { singupPostApi } from "../utils/apiFunctions";
import { texts, tr } from "../langs/tr";

export default function SignUp(): JSX.Element {
  const [phone, setPhone] = useRecoilState(phoneInput);
  const [password, setPassword] = useRecoilState(passwordInput);
  const navigate = useNavigate();

  document.title = tr(0, texts.signup.signupPageTitle);

  const handleSubmit: (e: any) => void = (e: any) => {
    e.preventDefault();
    const userPhone: string = phone.trim();
    const userPassword: string = password.trim();

    /[0-9]{10}/.test(userPhone) && userPassword
      ? (singupPostApi(userPhone, userPassword, navigate), setPhone(""), setPassword(""))
      : swal({
          title: tr(0, texts.formPlaceholders.formSwalErrorModal),
          icon: "error",
          buttons: ":(",
        });
  };

  return (
    <Form
      title={
        <LoginTexts
          title={tr(0, texts.signup.signupFormTitle)}
          phoneText={tr(0, texts.formPlaceholders.FormFirstText)}
          text={tr(0, texts.signup.signupFormSecondText)}
        />
      }
      onFormSubmit={(e: any) => handleSubmit(e)}
      switchButton={<Button title={tr(0, texts.signup.signupFormButton)} link="/login" />}
    />
  );
}
