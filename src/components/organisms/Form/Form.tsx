import Links from "../../molecules/Login/Links/Links";
import { texts, tr } from "../../../langs/tr";
import { useRecoilState } from "recoil";
import { passwordInput, phoneInput } from "../../../utils/recoilStateManager";

export default function Form(props: any): JSX.Element {
  const [phone, setPhone] = useRecoilState(phoneInput);
  const [password, setPassword] = useRecoilState(passwordInput);

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-slate-200">
      <form
        className="flex flex-col gap-4 justify-center drop-shadow-md bg-white py-4 px-12 rounded-sm max-w-[28rem]"
        onSubmit={(e) => props.onFormSubmit(e)}
      >
        {props.title}
        <label className="hover:border-red-800 transition-all duration-300 text-sm-300 font-bold flex gap-2 items-center justify-between border border-zinc-300 rounded-sm py-1 px-2">
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            className="text-sm-300 w-full font-bold outline-none placeholder:text-gray"
            dir="ltr"
            placeholder={tr(0, texts.formPlaceholders.phone)}
            value={phone}
          />
          98+
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="focus:border-red-800 transition-all duration-300 text-sm-300 w-full font-bold outline-none placeholder:text-gray border border-zinc-300 rounded-sm py-1 px-2"
          dir="ltr"
          placeholder={tr(0, texts.formPlaceholders.password)}
          value={password}
        />
        <Links />
        <div className="flex items-center justify-between">
          {props.switchButton}
          <button
            type="submit"
            className="whitespace-nowrap py-2 px-3 text-white font-medium text-xs bg-red-800 transition-all duration-300 rounded-md hover:bg-red-700"
          >
            {tr(0, texts.formPlaceholders.button)}
          </button>
        </div>
      </form>
    </section>
  );
}
