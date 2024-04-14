import Button from "../../atoms/Button/Button";

export default function ErrorSectionEmpty({ title }: any) {
  return (
    <section className="flex flex-col justify-center items-center gap-6 sm:basis-3/4 basis-full">
      <img
        src="/img/svg/user-profile-no-ad-img.svg"
        alt="no-ad-alert"
        className="w-48 h-48 object-cover"
      />
      <p className="">{title}</p>
      <Button title="ثبت آگهی" link="/newproduct" />
    </section>
  );
}
