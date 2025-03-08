"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export type LoginValues = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginValues>();
  const router = useRouter();

  const onSubmit = async (data: LoginValues) => {
    console.log(data);
    // try {
    //   const res = await loginUser(data);
    //   console.log(res);
    //   if (res?.data?.accessToken) {
    //     toast.success("Login successful");
    //     localStorage.setItem("accessToken", res?.data?.accessToken);
    router.push("/");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    // }
  };
  return (
    <div className="max-width h-screen flex justify-center items-center">
      <div className="w-full max-w-[550px] mx-auto bg-slate-100 p-8 shadow-lg rounded-2xl">
        <h1 className="text-center text-3xl mb-5 font-bold">
          Login <span className="text-blue-400">Here</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="text-black">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm outline-none "
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm outline-none "
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-400 duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-700">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-400 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
