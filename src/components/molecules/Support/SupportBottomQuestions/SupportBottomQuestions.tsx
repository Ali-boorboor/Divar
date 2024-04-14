import SupportBottomQuestionBox from "../SupportBottomQuestionBox/SupportBottomQuestionBox";

export default function SupportBottomQuestions(): JSX.Element {
  return (
    <section className="grid justify-items-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-3 gap-x-16 gap-y-8 w-full">
      <SupportBottomQuestionBox img="/img/png/cash-icon.png" title="پرداخت و موارد مالی" />
      <SupportBottomQuestionBox img="/img/png/wrong-document-icon.png" title="بررسی و رد آگهی" />
      <SupportBottomQuestionBox img="/img/png/right-document-icon.png" title="ثبت و مدیریت آگهی" />
      <SupportBottomQuestionBox img="/img/png/document-icon.png" title="نمایش و جستجوی آگهی" />
      <SupportBottomQuestionBox img="/img/png/social-media-icon.png" title="ورود و حساب کاربری" />
      <SupportBottomQuestionBox img="/img/png/media-icon.png" title="تخلفات و گزارش ها" />
      <SupportBottomQuestionBox img="/img/png/comment-icon.png" title="چت و تماس ناشناس دیوار" />
      <SupportBottomQuestionBox img="/img/png/agency-panel.png" title="دیوار برای کسب و کارها" />
    </section>
  );
}
