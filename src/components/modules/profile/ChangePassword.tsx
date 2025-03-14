import { passwordSchema } from "@/schemas/auth/authValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdLock } from "react-icons/md";
import { z } from "zod";

type FormData = z.infer<typeof passwordSchema>;

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(passwordSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (data: FormData) => {
    // try {
    //   toast.success("Password changed successfully");
    // } catch (error) {
    //   const err = error as TError;
    //   toast.error(err?.data?.message || "Failed to change password");
    // } finally {
    //   reset();
    // }
  };

  return (
    <form className="w-full max-w-[500px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <p className="flex items-center gap-2">
          <MdLock className="text-lg" />
          Current Password
        </p>
        <input
          type="password"
          {...register("currentPassword")}
          placeholder="Current Password"
          className="border outline-none px-4 py-2.5 focus:border-primary duration-300 rounded-lg mt-2 w-full text-sm"
        />
        {errors.currentPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.currentPassword.message}
          </p>
        )}
      </div>

      <div className="mb-5">
        <p className="flex items-center gap-2">
          <MdLock className="text-lg" />
          New Password
        </p>
        <input
          type="password"
          {...register("newPassword")}
          placeholder="New Password"
          className="border outline-none px-4 py-2.5 focus:border-primary duration-300 rounded-lg mt-2 w-full text-sm"
        />
        {errors.newPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.newPassword.message}
          </p>
        )}
      </div>

      <div className="mb-5">
        <p className="flex items-center gap-2">
          <MdLock className="text-lg" />
          Confirm New Password
        </p>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm New Password"
          className="border outline-none px-4 py-2.5 focus:border-primary duration-300 rounded-lg mt-2 w-full text-sm"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        // disabled={isLoading}
        className={`cursor-pointer text-sm sm:text-base px-5 py-2 border rounded-lg font-medium text-white bg-primary disabled:bg-primary/80 w-44 sm:w-52`}
      >
        {/* {isLoading ? "Changing..." : "Change Password"} */}
        Change Password
      </button>
    </form>
  );
};

export default ChangePassword;
