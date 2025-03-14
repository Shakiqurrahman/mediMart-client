"use client";

import defaultAvatar from "@/assets/no-profile-picture.svg";
import { setUser } from "@/redux/features/userSlice";
import { IUser } from "@/types/userType";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMail, AiOutlinePicture } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import ChangePassword from "./ChangePassword";

const ProfileBox = ({ data }: { data: IUser }) => {
  const dispatch = useDispatch();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Initialize form with fetched user data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialForm, setInitialForm] = useState({
    name: data?.name || "",
    email: data?.email || "",
    password: "",
    avatar: data?.avatarUrl || "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];    
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setForm({ ...form, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const [form, setForm] = useState(initialForm);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  // Track changes to enable/disable the Update button
  useEffect(() => {
    if (data) {
      const isFormModified =
        form.name !== initialForm.name ||
        form.email !== initialForm.email ||
        form.avatar !== initialForm.avatar;

      setIsModified(isFormModified);
    }
  }, [form, initialForm, data]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };  

  const handleUpdateForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    if (fileInputRef.current?.files?.[0]) {
      formData.append("avatar", fileInputRef.current.files[0]);
    } else {
      formData.append("avatar", form.avatar);
    }

    // try {
    //   await updateProfile(formData).unwrap();
    //   toast.success("Profile updated successfully");
    // } catch (err) {
    //   console.error("Update failed:", err);
    //   toast.error("Failed to update profile");
    // }
  };

  const handleRemoveFile = () => {
    setForm((prevForm) => ({
      ...prevForm,
      avatar: "",
    }));
  };

  const handleCancel = () => {
    setForm(initialForm);
  };  
  return (
    <section className="max-w-[1280px] mx-auto mt-10">
      <div className="bg-white rounded-2xl px-4 py-8 sm:p-10">
        <h1 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
          <FaRegUserCircle /> Account Preferences
        </h1>

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-10">
          <div className="w-full max-w-[500px]">
            <div className="flex items-center gap-6">
              <Image
                className="size-24 rounded-full border border-gray-200 shadow sm:size-28 object-cover"
                src={form?.avatar || defaultAvatar}
                alt=""
                width={400}
                height={400}
              />
              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <div className="space-y-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  type="button"
                  className="flex items-center gap-2 cursor-pointer text-primary border border-primary px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm font-medium"
                >
                  <AiOutlinePicture className="text-base" /> Change
                </button>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  disabled={!form.avatar}
                  className="flex items-center gap-2 cursor-pointer text-primary hover:text-primary/85 border border-primary px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <RiDeleteBinLine className="text-base" /> Remove
                </button>
              </div>
            </div>

            <form onSubmit={handleUpdateForm} className="mt-8 w-full">
              <div className="mb-5">
                <p className="flex items-center gap-2">
                  <FiUser className="text-lg" />
                  Full Name
                </p>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="border outline-none px-4 py-2.5 focus:border-primary duration-300 rounded-lg mt-2 w-full text-sm"
                />
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <AiOutlineMail className="text-lg" />
                  Email Address
                </p>
                <input
                  type="text"
                  name="email"
                  readOnly
                  disabled
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="border outline-none px-4 py-2.5 focus:border-primary duration-300 rounded-lg mt-2 w-full text-sm disabled:cursor-not-allowed"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  disabled={!isModified}
                  onClick={handleCancel}
                  className="text-sm sm:text-base cursor-pointer px-4 sm:px-8 py-2 border rounded-lg border-primary text-primary font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`text-sm sm:text-base px-4 sm:px-8 py-2 border rounded-lg font-medium text-white disabled:bg-primary/60 ${
                    isModified ? "bg-primary cursor-pointer" : "bg-primary/60"
                  }`}
                  // disabled={!isModified || isSubmitting}
                >
                  Update
                </button>
              </div>
            </form>
          </div>

          <ChangePassword />
        </div>
      </div>
      {/* {isSubmitting && (
        <div className="fixed bottom-0 left-0 right-0 w-full h-screen bg-black/40 z-[999999] flex justify-center items-center">
          <AiOutlineLoading3Quarters className="animate-spin text-white text-4xl" />
        </div>
      )} */}
    </section>
  );
};

export default ProfileBox;
