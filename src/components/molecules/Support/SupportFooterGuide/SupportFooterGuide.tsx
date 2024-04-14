import SupportFooterGuideBox from "../SupportFooterGuideBox/SupportFooterGuideBox";

export default function SupportFooterGuide(): JSX.Element {
  return (
    <section className="grid justify-items-center gap-6 grid-cols-1 sm:grid-cols-3 w-full">
      <SupportFooterGuideBox
        title="شرایط و قوانین کلی استفاده از دیوار"
        link="مشاهدهٔ شرایط و قوانین کلی استفاده از دیوار"
        text="دریافت خدمات از سایت و اپلیکیشن دیوار در گرو رعایت شرایط و قوانین دیوار است. لطفاً پیش از استفاده از خدمات دیوار، شرایط و قوانین را به صورت کامل و با دقت مطالعه کنید."
      />
      <SupportFooterGuideBox
        title="راهنمای خرید و فروش امن"
        link="مشاهدهٔ راهنمای خرید و فروش امن"
        text="مطالعهٔ راهنمای خرید امن قبل و هنگام معامله احتمال کلاهبرداری را کاهش می‌دهد. لطفا پیش از انجام هرگونه خرید و فروش، راهنمای خرید امن را با دقت مطالعه کنید."
      />
      <SupportFooterGuideBox
        title="انتقادات و پیشنهادات"
        link="مشاهدهٔ انتقادات و پیشنهادات"
        text="به منظور بهبود تجربهٔ کاربری و خدمات دیوار و همچنین افزایش رضایت کاربران، خوشحال می‌شویم با ارسال انتقادات و پیشنهادهای خود، ما را در بهبود کیفیت ارائهٔ خدمات یاری نمائید."
      />
    </section>
  );
}
