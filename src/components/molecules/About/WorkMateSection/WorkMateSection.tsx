export default function WorkMateSection(): JSX.Element {
  return (
    <section className="flex flex-col gap-8 justify-center items-center p-4 border-b pb-12 border-zinc-300">
      <h2 className="text-xl font-bold">همکاران تجاری دیوار</h2>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <img src="/img/svg/about-valid.svg" alt="" className="w-9 h-9 object-cover" />
          <p className="text-sm font-medium">کارنامه</p>
          <p className="text-gray font-medium min-w-60 max-w-96 text-sm-300">
            کارنامه با هدف خلق تجربه کاربری بهتر در خرید و فروش خودرو و به عنوان یک سرویس مکمل
            دیوار، با ارائه سرویس‌های کارشناسی خودرو در محل و فروش سفارشی آغاز به کار کرد.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <img src="/img/svg/about-digital-icon.svg" alt="" className="w-9 h-9 object-cover" />
          <p className="text-sm font-medium">پیشگامان</p>
          <p className="text-gray font-medium min-w-60 max-w-96 text-sm-300">
            پیشگامان، به‌عنوان یک شرکت مستقل در کنار دیوار همکاری می‌کند و به‌نوعی بازوی اصلی
            پشتیبانی و ارتباط نزدیک با کاربران محسوب می‌شود.
          </p>
        </div>
      </div>
      <a href="#" className="mt-4 text-red-800 text-sm font-medium">
        بیشتر بخوانید
      </a>
    </section>
  );
}