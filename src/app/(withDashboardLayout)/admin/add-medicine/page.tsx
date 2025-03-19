"use client";
// import { addProject } from "@/utils/actions/projectActions";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export interface IFormData {
  name: string;
  thumbnail: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const AddProjectPage = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    thumbnail: "",
    description: "",
    githubLink: "",
    liveLink: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        githubLink: "",
        liveLink: "",
      });
    } catch (error) {
      console.error("Error submitting marketplace project:", error);
      toast.error("Failed to add project");
    }
  };

  return (
    <section className="px-4 lg:px-10 my-16">
      <h1 className="text-2xl text-center font-semibold">Add Project</h1>
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
              className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 outline-none"
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

export default AddProjectPage;
