import { Link } from "react-router-dom";

export default function ProductCardBox({
  product_name,
  product_price,
  product_status,
  product_id,
  created_at,
}: any): JSX.Element {
  const createdAtString = created_at;
  const createdAtDate = new Date(createdAtString).toLocaleDateString();

  return (
    <Link
      to={`/product/${product_id}`}
      className="flex justify-between items-center gap-4 min-w-60 w-full max-w-96 bg-white drop-shadow-lg p-4 rounded-md border border-zinc-300"
    >
      <div className="flex flex-col justify-between h-40">
        <p className="">{product_name}</p>
        <div className="flex flex-col">
          {product_status !== "undefined" && (
            <p className="text-gray font-medium text-sm-300">{product_status}</p>
          )}
          <p className="text-gray font-medium text-sm-300">
            {Number(product_price).toLocaleString()}
          </p>
          <p className="text-sm-300">{createdAtDate}</p>
        </div>
      </div>
      <img
        src="/img/product-house-img.webp"
        alt="house-img"
        className="min-w-24 w-full max-w-40 h-40 rounded-md object-cover"
      />
    </Link>
  );
}
