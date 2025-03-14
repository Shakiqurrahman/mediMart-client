import { AiOutlineLoading3Quarters } from "react-icons/ai";

const loading = () => {
  return (
    <>
      <div className="h-[calc(100vh-96px)] flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
      </div>
    </>
  );
};

export default loading;
