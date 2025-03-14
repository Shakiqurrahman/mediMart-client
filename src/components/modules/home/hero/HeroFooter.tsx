import { MdOutlineDoorSliding } from "react-icons/md";
import { PiAmbulanceFill } from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";

const HeroFooter = () => {
  return (
    <div className="bg-[#fbf8f3] py-8 text-gray-600">
      <div className="max-width flex justify-between flex-wrap gap-5">
        <div className="flex items-center gap-4 sm:gap-6">
          <PiAmbulanceFill className="size-12 " />
          <div>
            <h3 className="text-xl font-semibold">Free Shipping</h3>
            <p>Get your medicines delivered for free!</p>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <RiDiscountPercentFill className="size-12 " />
          <div>
            <h3 className="text-xl font-semibold">Official Discounts</h3>
            <p>Save big on next product</p>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <MdOutlineDoorSliding className="size-12 " />
          <div>
            <h3 className="text-xl font-semibold">24/7 Helpline</h3>
            <p>Care till the end</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
