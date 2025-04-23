"use client";
import { getSingleProduct } from "@/services/products";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";
import { IFormData } from "../../../add-medicine/page";

const ProductEditPage = () => {
  const { productId } = useParams();
  const router = useRouter();
  console.log("🚀 ~ ProductEditPage ~ productId:", productId);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    thumbnail: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    requiredPrescriptions: false,
    manufacturer: "",
    expiryDate: "",
  });

  useEffect(() => {
    if (!productId) return;
    const fetchBlog = async (id: string) => {
      setIsLoading(true);
      try {
        const response = await getSingleProduct(id);
        if (!response?.success) {
          router.push("/admin/product-management");
        }
        const { data } = response || {};
        setFormData({
          name: data.name || "",
          description: data.description || "",
          price: data.price || "",
          quantity: data.quantity || "",
          category: data.category || "",
          thumbnail: data.thumbnail || "",
          manufacturer: data.manufacturer || "",
          expiryDate: data.expiryDate || "",
          requiredPrescriptions: data.requiredPrescriptions || false,
        });
      } catch (error) {
        console.error("Failed to fetch blog data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog(productId as string);
  }, [productId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // const res = await addProject(formData);

      // if (!res) {
      //   toast.error("Failed to add project");
      // }

      toast.success("Project added successfully!");

      setFormData({
        name: "",
        thumbnail: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        requiredPrescriptions: false,
        manufacturer: "",
        expiryDate: "",
      });
    } catch (error) {
      console.error("Error submitting marketplace project:", error);
      toast.error("Failed to add project");
    }
  };

  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen">
      <CgSpinner size={40} className="animate-spin" />
    </div>
  ) : (
    <section className="px-4 lg:px-10 my-16">
      <h1 className="text-2xl text-center font-semibold">Edit Medicine</h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-medium text-gray-700"
            >
              Medicine Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="thumbnail"
              className="block text-base font-medium text-gray-700"
            >
              Thumbnail URL
            </label>
            <input
              id="thumbnail"
              name="thumbnail"
              type="url"
              value={formData.thumbnail}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="description"
            className="block text-base font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 outline-none h-[200px]"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="price"
              className="block text-base font-medium text-gray-700"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-base font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="category"
              className="block text-base font-medium text-gray-700"
            >
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="manufacturer"
              className="block text-base font-medium text-gray-700"
            >
              Manufacturer
            </label>
            <input
              id="manufacturer"
              name="manufacturer"
              type="text"
              value={formData.manufacturer}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-4">
            <input
              id="requiredPrescriptions"
              name="requiredPrescriptions"
              type="checkbox"
              checked={formData.requiredPrescriptions}
              onChange={handleChange}
              className="mt-1 size-5"
            />
            <label
              htmlFor="requiredPrescriptions"
              className="block text-base font-medium text-gray-700 select-none"
            >
              Required Prescription
            </label>
          </div>

          <div>
            <label
              htmlFor="expiryDate"
              className="block text-base font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              id="expiryDate"
              name="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-8 py-2.5 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ProductEditPage;
