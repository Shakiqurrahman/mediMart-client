"use client";
import { getProjectById, updateProject } from "@/utils/actions/projectActions";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IFormData {
  name?: string;
  thumbnail?: string;
  description?: string;
  githubLink?: string;
  liveLink?: string;
}

const UpdateprojectPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { projectId } = useParams();
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    thumbnail: "",
    description: "",
    githubLink: "",
    liveLink: "",
  });

  useEffect(() => {
    if (!projectId) return;
    const fetchBlog = async (projectId: string) => {
      setIsLoading(true);
      try {
        const data = await getProjectById(projectId);
        // Update form data with the fetched blog data
        if (data) {
          setFormData({
            name: data.name || "",
            description: data?.description || "",
            githubLink: data?.githubLink || "",
            liveLink: data?.liveLink || "",
            thumbnail: data?.thumbnail || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch blog data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog(projectId as string);
  }, [projectId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await updateProject(projectId as string, formData);
      if (!res) {
        toast.error("Failed to update project");
        return;
      }
      if (res?.success) {
        toast.success("Project updated successfully!");
        router.push("/dashboard/project-management");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      toast.error("Failed to update project");
    }
  };

  return (
    <section className="px-4 lg:px-10 my-16">
      <h1 className="text-2xl text-center font-semibold">Update Project</h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-medium text-gray-700"
            >
              Project Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-900 rounded-md p-3 outline-none"
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
              className="mt-1 block w-full sm:text-sm border border-gray-900 rounded-md p-3 outline-none"
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
            className="mt-1 block w-full sm:text-sm border border-gray-900 rounded-md p-3 outline-none h-[200px]"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="githubLink"
              className="block text-base font-medium text-gray-700"
            >
              GitHub Link
            </label>
            <input
              id="githubLink"
              name="githubLink"
              type="text"
              value={formData.githubLink}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-900 rounded-md p-3 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="liveLink"
              className="block text-base font-medium text-gray-700"
            >
              Live Link
            </label>
            <input
              id="liveLink"
              name="liveLink"
              type="text"
              value={formData.liveLink}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-900 rounded-md p-3 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-8 py-2.5 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Update
        </button>
      </form>
      {isLoading && (
        <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 z-[99999999] backdrop-blur-sm">
          <AiOutlineLoading3Quarters className="text-5xl animate-spin" />
        </div>
      )}
    </section>
  );
};

export default UpdateprojectPage;
