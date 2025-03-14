import { logoutUser } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IUser } from "@/types/userType";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuUser } from "react-icons/lu";
import { MdLogout, MdViewCompact } from "react-icons/md";
import { toast } from "sonner";

type DropdownProfileProps = {
  close: () => void;
  user: IUser | undefined;
};
const DropdownProfile = ({ close, user }: DropdownProfileProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    close();
    dispatch(logoutUser());
    toast.success("Logout Successfully");
    router.push("/sign-in");
  };
  return (
    <div className="shadow-xl mt-3 py-2 bg-white text-black absolute top-full -right-2 rounded-lg border border-gray-300 before:absolute before:top-[-0.5rem] before:right-[1.5rem] before:size-4 before:bg-white before:rotate-[45deg] before:border-l before:border-t before:border-l-gray-300 before:border-t-gray-300 text-sm sm:text-base text-nowrap flex flex-col items-start">
      <Link
        href="/me"
        onClick={close}
        className="flex gap-2 items-center px-4 py-2 hover:bg-body duration-300"
      >
        <LuUser className="text-lg" />
        View Profile
      </Link>
      {user?.role === "admin" ? (
        <Link
          href="/dashboard"
          onClick={close}
          className="flex gap-2 items-center px-4 py-2 hover:bg-body duration-300"
        >
          <MdViewCompact className="text-lg" />
          Dashboard
        </Link>
      ) : (
        <Link
          href="/orders"
          onClick={close}
          className="flex gap-2 items-center px-4 py-2 hover:bg-body duration-300"
        >
          <MdViewCompact className="text-lg" />
          View Orders
        </Link>
      )}
      <button
        onClick={handleLogout}
        className="cursor-pointer px-4 py-2 flex items-center gap-2 w-full text-left hover:bg-body duration-300"
      >
        <MdLogout className="text-lg" /> Logout
      </button>
    </div>
  );
};

export default DropdownProfile;
