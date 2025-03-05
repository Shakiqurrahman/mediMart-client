"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export type RegisterValues = {
  username: string;
  email: string;
  password: string;
};
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<RegisterValues>();

  const router = useRouter();

  const onSubmit = async (data: RegisterValues) => {
    console.log(data);
    // try {
    //   const res = await registerUser(data);
    //   if (res.success) {
    //     alert(res.message);
    router.push("/login");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    //   throw new Error(err.message);
    // }
  };
  return (
    <div className="max-width h-screen flex justify-center items-center">
      <div className="w-full max-w-[550px] mx-auto bg-slate-100 p-8 shadow-lg rounded-2xl">
        <h1 className="text-center text-3xl font-bold mb-5">
          Register <span className="text-blue-400">Now</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="text-black">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              {...register("username")}
              placeholder="User Name"
              className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>

          <p className="text-center text-gray-700">
            Already have an account?{" "}
            <Link className="text-blue-400 hover:underline" href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
