import ProductCard from "@/components/cards/ProductCard";
import { getAllProducts } from "@/services/products";
import { TProduct } from "@/types/productType";
import Link from "next/link";

const ProductManagementPage = async () => {
  const { data: products } = await getAllProducts();
  return (
    <div className="m-4 mt-16 lg:m-8">
      <div className="flex items-center gap-2 justify-between border-b pb-3 border-dashed border-b-gray-400">
        <h1 className="text-2xl font-semibold">All Medicines</h1>
        <Link href={"/admin/medicines/add"}>
          <button className="bg-blue-400 text-white font-medium px-5 py-2.5 rounded-full">
            Add Medicine
          </button>
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 relative mt-10">
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

export default ProductManagementPage;
