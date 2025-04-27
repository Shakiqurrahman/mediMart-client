"use client";
import { getSingleProduct, updateProduct } from "@/services/products";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "sonner";
import { IMedicineData } from "../../add/page";

const ProductEditPage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { productId } = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState<IMedicineData>({
    name: "",
    thumbnail: "",
    imagePreview: "",
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
          imagePreview: data.thumbnail || "",
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        thumbnail: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({
      ...prev,
      thumbnail: "",
      imagePreview: "",
    }));

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!productId) return;

    setIsUpdating(true);

    const submittedData = new FormData();
    submittedData.append("name", formData.name);
    submittedData.append("description", formData.description);
    submittedData.append("price", String(formData.price));
    submittedData.append("quantity", String(formData.quantity));
    submittedData.append("category", formData.category);
    submittedData.append(
      "requiredPrescriptions",
      String(formData.requiredPrescriptions)
    );
    submittedData.append("manufacturer", formData.manufacturer);
    submittedData.append("imageUrl", formData.thumbnail);
    if (formData.expiryDate) {
      submittedData.append("expiryDate", formData.expiryDate);
    }

    try {
      const res = await updateProduct(submittedData, productId as string);
      if (res?.success) {
        toast.success("Medicine updated successfully!");
        router.push("/admin/medicines");
      } else {
        toast.error("Failed to update project");
      }
    } catch (error) {
      console.error("Error submitting marketplace project:", error);
      toast.error("Failed to update project");
    } finally {
      setIsUpdating(false);
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

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Upload Image
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-400 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none py-2.5 px-3"
            onChange={handleImageChange}
          />

          {/* Image Preview */}
          {formData.imagePreview && (
            <div className="mt-3 flex items-center gap-4 relative">
              <Image
                src={formData.imagePreview}
                alt="Preview"
                width={150}
                height={150}
                className="w-40 rounded-lg border border-gray-300"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="bg-primary text-white font-medium text-lg p-3 rounded-full hover:bg-primary/80 transition absolute top-2 left-2"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          )}
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
          disabled={isUpdating}
          className="mt-6 px-8 py-2.5 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ProductEditPage;
