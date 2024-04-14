export default function AboutDivarSection(): JSX.Element {
  return (
    <section className="flex items-center justify-center gap-8 flex-wrap p-4">
      <div className="flex flex-col gap-4 max-w-96">
        <h1 className="text-2xl font-bold">دربارهٔ دیوار</h1>
        <p className="text-gray text-sm font-normal">
          دیوار از ۲۱ تیر ۱۳۹۱ با هدف خرید و فروش بدون واسطهٔ آنلاین آغاز به کار کرد. امتیاز برند
          دیوار توسط شرکت «آگه پردازان هوشمند» (سهامی خاص) در تمامی مراجع قانونی ثبت شده است.
        </p>
      </div>
      <div className="bg-about-divar bg-cover w-56 sm:w-about-desktop h-40 sm:h-64"></div>
    </section>
  );
}