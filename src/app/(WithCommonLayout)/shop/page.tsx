import ProductCard from "@/components/cards/ProductCard";
import ProductLeft from "@/components/modules/shop/ProductLeft";
import { getAllProducts } from "@/services/products";
import { TProduct } from "@/types/productType";

const ShopPage = async () => {
  const { data: products } = await getAllProducts();
  return (
    <div className="mt-10 md:mt-20 max-width flex flex-col md:flex-row items-start gap-4">
      <div className="w-full md:w-[400px] md:sticky md:top-16">
        <ProductLeft />
      </div>
      <div className="flex-1 grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 relative">
        {products?.length > 0 ? (
          products?.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-10">
            No products found!
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
