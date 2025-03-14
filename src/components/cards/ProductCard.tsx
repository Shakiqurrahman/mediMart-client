import { TProduct } from "@/types/productType";
import Image from "next/image";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-[#f7f7f7] p-8 rounded-lg">
      {product?.thumbnail && (
        <Image src={product?.thumbnail} alt={product.name} />
      )}
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p>{product?.description}</p>
      <p className="text-2xl text-blue-400 mt-2">${product.price}</p>
      <button className="bg-blue-400 px-6 py-2 text-white mt-5 w-full rounded-md font-semibold">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
