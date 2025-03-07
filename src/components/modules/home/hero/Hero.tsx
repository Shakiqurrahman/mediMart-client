import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      className={`${styles.banner} w-full xl:min-h-[calc(100vh-96px)] flex items-center`}
    >
      <div className="max-width w-full">
        <p className="text-gray-200 text-sm sm:text-base font-semibold uppercase tracking-[5px]">
          Welcome to MediMart!
        </p>
        <h1 className="text-4xl md:text-6xl font-bold max-w-[550px] text-white">
          Discover the world of medicine
        </h1>
        <p className="text-gray-200 mt-4">
          Your Trusted Online Pharmacy – Safe, Fast, and Affordable!
        </p>
        <button className="bg-white px-6 py-2.5 rounded-sm font-semibold uppercase mt-6 text-main flex items-center gap-1 group">
          Shop Now
          <ArrowRight className="size-5 group-hover:translate-x-2 duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
