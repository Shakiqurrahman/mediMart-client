import ProductCard from "@/components/cards/ProductCard";
import { getAllProducts } from "@/services/products";
import { TProduct } from "@/types/productType";

const FeaturedProducts = async () => {
  const { data: products } = await getAllProducts();  
  return (
    <section className="max-width mt-16 mb-28">
      <h1 className="text-3xl sm:text-4xl text-main font-bold text-center">
        Featured Medicines
      </h1>
      <p className="text-center">
        Quality medicines for a healthier life, all in one place.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-10">
        {products
          ?.reverse()
          ?.slice(0, 6)
          ?.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
