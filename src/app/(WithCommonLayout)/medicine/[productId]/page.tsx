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
  const { data } = res as { data: TProduct };

  return (
    <section>
      <ProductDetailsBanner title={data?.name} />
      {data && (
        <div className="max-width mt-20">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {data?.thumbnail && (
              <Image
                src={data?.thumbnail}
                alt={data?.name}
                className="w-full"
                width={150}
                height={150}
              />
            )}
            <div className="w-full">
              <h1 className="text-2xl sm:text-4xl font-bold text-blue-400 mb-4">
                {data.name}
              </h1>
              <p>{data?.description}</p>
              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-blue-700">
                ${data.price}
              </h3>

              <div className="mt-8 space-y-3 text-gray-500">
                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold text-blue-900">
                    Category :
                  </p>
                  <p className="text-lg">{data.category}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold text-blue-900">
                    Manufacturer :
                  </p>
                  <p className="text-lg">{data.manufacturer}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold text-blue-900">
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
                  <p className="text-lg font-semibold text-blue-900">
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
      )}
    </section>
  );
};

export default ProductDetailsPage;
