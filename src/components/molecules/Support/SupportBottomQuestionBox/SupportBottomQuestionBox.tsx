export default function SupportBottomQuestionBox(props: any): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <img src={props.img} className="bg-cover bg-no-repeat w-12 h-12" />
      <a href="#" className="text-black">
        {props.title}
      </a>
      <a href="#" className="text-gray text-sm hover:text-black transition-all duration-300">
        کیف پول مشترک پنل فروشگاه
      </a>
      <a href="#" className="text-gray text-sm hover:text-black transition-all duration-300">
        کیف پول مشترک پنل فروشگاه
      </a>
      <a href="#" className="text-gray text-sm hover:text-black transition-all duration-300">
        کیف پول مشترک پنل فروشگاه
      </a>
      <a href="#" className="text-gray text-sm hover:text-black transition-all duration-300">
        کیف پول مشترک پنل فروشگاه
      </a>
      <a href="#" className="text-gray text-sm hover:text-black transition-all duration-300">
        کیف پول مشترک پنل فروشگاه
      </a>
      <a href="#" className="text-red-800 font-medium text-sm-300">
        موارد بیشتر
      </a>
    </div>
  );
};