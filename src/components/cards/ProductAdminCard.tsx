"use client";
import img from "@/assets/mask.jpg";
import { deleteProduct } from "@/services/products";
import { TProduct } from "@/types/productType";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const ProductAdminCard = ({ product }: { product: TProduct }) => {
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteProduct(id);
      if (res?.success) {
        toast.success("Medicine deleted successfully");
      } else {
        toast.error("Failed to delete");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to delete");
    }
  };
  return (
    <div className="bg-white p-8 rounded-2xl drop-shadow-md">
      {product?.thumbnail ? (
        <Image
          src={img}
          alt={product?.thumbnail}
          className="max-h-[200px] object-cover"
        />
      ) : (
        <Image
          src={img}
          alt={product.name}
          className="max-h-[200px] object-cover"
        />
      )}
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="line-clamp-2">{product?.description}</p>
      <p className="text-2xl text-blue-400 mt-2">${product.price}</p>
      <div className="flex items-center justify-center gap-2 mt-5">
        <Link className="w-full" href={`/admin/medicines/edit/${product._id}`}>
          <button
            type="button"
            className="bg-blue-900 px-6 py-2 text-white w-full rounded-[5px] font-semibold"
          >
            Edit
          </button>
        </Link>
        <button
          type="button"
          onClick={() => handleDelete(product._id)}
          className="bg-red-900 px-6 py-2 text-white w-full rounded-[5px] font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductAdminCard;
