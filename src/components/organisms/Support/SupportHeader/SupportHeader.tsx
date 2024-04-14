import MainMenu from "../../../molecules/MainMenu/MainMenu";
import SearchInput from "../../../molecules/SearchInput/SearchInput";

// * the header section of Support page
export default function SupportHeader(): JSX.Element {
  return (
    <>
      <MainMenu />
      <header className="bg-support-header bg-cover bg-no-repeat w-screen flex h-60 flex-col items-center justify-end p-4 mt-16">
        <div className="w-60 sm:w-96 text-center flex flex-col gap-2">
          <h1 className="text-white text-2xl font-bold">به مرکز پشتیبانی دیوار خوش آمدید</h1>
          <h2 className="text-white text-base font-bold">چطور می‌توانیم کمکتان کنیم؟</h2>
          <SearchInput placeholder="جستجو در مقالات راهنما" bg="bg-white" />
        </div>
      </header>
    </>
  );
}
