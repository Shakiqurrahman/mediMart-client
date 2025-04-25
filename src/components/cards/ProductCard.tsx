import { TProduct } from "@/types/productType";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-[#f7f7f7] p-8 rounded-[15px]">
      {product?.thumbnail && (
        <Image src={product?.thumbnail} alt={product.name} />
      )}
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="line-clamp-2">{product?.description}</p>
      <p className="text-2xl text-blue-400 mt-2 font-semibold">
        ${product.price}
      </p>
      <div className="flex flex-col gap-2">
        <button className="bg-blue-900 px-6 py-2 text-white mt-5 w-full rounded-md font-semibold">
          Add To Cart
        </button>
        <Link href={`/medicine/${product?._id}`}>
          <button className="block bg-blue-400 px-6 py-2 text-white w-full rounded-md font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
