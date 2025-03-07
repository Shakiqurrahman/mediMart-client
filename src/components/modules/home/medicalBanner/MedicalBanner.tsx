import Link from "next/link";
import styles from "./medicalBanner.module.css";
const MedicalBanner = () => {
  return (
    <div
      className={`${styles.banner} flex flex-col justify-center items-center`}
    >
      <div className="max-width ">
        <h1 className="text-white font-semibold text-3xl sm:text-4xl text-center mb-4">
          One stop destination for all your medical need.
        </h1>
        <p className="text-white text-center text-sm sm:text-base">
          Medicine Made Simple – Order Online & Get It Delivered!
        </p>
        <Link href={"/shop"}>
          <button className="bg-white px-5 py-2.5 rounded-sm font-semibold uppercase mt-6 text-main flex items-center gap-1 group mx-auto">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MedicalBanner;
