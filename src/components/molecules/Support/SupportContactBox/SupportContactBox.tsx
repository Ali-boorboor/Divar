import Button from "../../../atoms/Button/Button";

export default function SupportContactBox(): JSX.Element {
  return (
    <section className="justify-center text-center items-center flex flex-col gap-2 ring-1 ring-zinc-300 w-full rounded-sm p-4">
      <h4 className="font-medium text-sm">جواب سوالتان را پیدا نکردید؟</h4>
      <p className="font-medium text-gray text-sm-300">
        اگر هنوز مشکلتان برطرف نشده است، می‌توانید با پشتیبان هوشمند دیوار گفتگو کنید.
      </p>
      <Button title="گفتگو با پشتیبان هوشمند" width="w-40" />
    </section>
  );
}
