import ProductDetailsBanner from "@/components/shared/ProductDetailsBanner";
import { getSingleProduct } from "@/services/products";
import { TProduct } from "@/types/productType";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const res = await getSingleProduct(productId);
  const { data } = (res as { data: TProduct }) || {};

  return (
    <section>
      <ProductDetailsBanner title={data?.name} />
      <div className="max-width">
        <h2 className="text-2xl font-semibold">{data?.name}</h2>
        <p>{data?.description}</p>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
