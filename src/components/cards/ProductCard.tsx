import { TProduct } from "@/types/productType";
import Image from "next/image";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-[#f7f7f7] p-8 rounded-lg">
      {product?.thumbnail && (
        <Image src={product?.thumbnail} alt={product.name} />
      )}
      <h2>{product.name}</h2>
      <p>{product?.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
