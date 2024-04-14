export default function AddressSection(): JSX.Element {
  return (
    <section className="flex flex-col gap-4 p-4 mb-20">
      <p className="text-sm-300 font-medium max-w-96">
        آدرس پستی: تهران، اوین، بلوار دانشجو، ساختمان دانشگاه شهید بهشتی، پارک علم و فناوری شهید
        بهشتی، طبقهٔ منفی سه، واحد ۸ <br />
        صندوق پستی: ۶۹۷۵۴-۱۹۸۳۹
      </p>
      <p className="text-sm-300 font-normal bg-orange-100 p-3 rounded-sm">
        تیم‌های فنی ما در این آدرس هستند، اما متأسفانه نمی‌توانیم پذیرای مراجعان حضوری باشیم.
      </p>
      <p className="text-sm-300 font-medium border-t border-zinc-300 pt-2">
        آدرس پستی: تهران، سعادت‌آباد، خیابان گلستان، خیابان باغستان، پلاک ۲، طبقهٔ چهارم واحد شمال
        شرقی <br/>صندوق پستی: ۳۵۸۲۵-۱۹۹۸۶ <br/>شمارهٔ تماس پشتیبانی: ۷۹۴۵۸۰۰۰-۰۲۱
      </p>
      <img src="/img/png/about-map-location.png" alt="" className="object-cover w-full h-40" />
    </section>
  );
}