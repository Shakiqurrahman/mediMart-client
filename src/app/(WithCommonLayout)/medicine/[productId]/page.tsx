import img from "@/assets/mask.jpg";
import ProductDetailsBanner from "@/components/shared/ProductDetailsBanner";
import { getSingleProduct } from "@/services/products";
import { TProduct } from "@/types/productType";
import { CheckSquare } from "lucide-react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

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
      <div className="max-width mt-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <Image src={img} alt={data?.thumbnail} className="w-full" />
          <div className="w-full">
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-400 mb-4">
              {data.name}
            </h1>
            <p>{data?.description}</p>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text--400">
              ${data.price}
            </h3>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-blue-400">
                  Category :
                </p>
                <p className="text-lg">{data.category}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-blue-400">
                  Manufacturer :
                </p>
                <p className="text-lg">{data.manufacturer}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-blue-400">
                  Required Prescriptions :
                </p>
                <p className="text-lg">
                  {data?.requiredPrescriptions ? (
                    <span className="flex items-center gap-2">
                      <CheckSquare className="text-green-500 size-5" />
                      Yes
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <AiOutlineClose className="text-red-500 size-4.5" />
                      No
                    </span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-blue-400">
                  Stock Availability :
                </p>
                <p className="text-lg">
                  {data?.isStock ? (
                    <span className="flex items-center gap-2">
                      <CheckSquare className="text-green-500 size-5" />
                      Available
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <AiOutlineClose className="text-red-500 size-4.5" />
                      Not available
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
