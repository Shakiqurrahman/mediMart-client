import img from "@/assets/product-banner.jpg";
import Image from "next/image";
import Link from "next/link";

const ProductDetailsBanner = ({ title }: { title: string }) => {
  return (
    <div className="bg-black h-[300px] overflow-hidden relative">
      <Image
        src={img}
        alt="Banner"
        className="w-full  object-cover opacity-40 h-full select-none"
      />
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 text-white  text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-3">
          {title ? "Medicine" : 404}
        </h2>
        <p>
          {title ? (
            <>
              <Link href={"/shop"} className="hover:text-blue-400 duration-300">
                All
              </Link>{" "}
              / {title}
            </>
          ) : (
            "Not found!"
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsBanner;
