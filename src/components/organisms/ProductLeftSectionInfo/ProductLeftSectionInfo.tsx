import { memo } from "react";

const ProductLeftSectionInfo = memo(() => {
  return (
    <section className="flex flex-col gap-4 sm:basis-1/2 basis-full">
      <img
        src="/img/product-house-img.webp"
        alt="product-profile"
        className="object-cover w-full h-80 rounded-md"
      />
      <textarea
        className="border border-zinc-300 p-2 rounded-md resize-none h-32 outline-none focus:border-red-700"
        placeholder="یادداشت شما..."
      ></textarea>
      <p className="text-gray text-base">
        یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.
      </p>
      <img src="/img/png/about-map-location.png" alt="product-location" className="object-cover" />
    </section>
  );
});

export default ProductLeftSectionInfo;
