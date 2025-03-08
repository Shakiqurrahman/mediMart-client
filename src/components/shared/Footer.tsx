import logo from "@/assets/Medimart-logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { BiCurrentLocation } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-12 pb-3">
      <div className="max-width">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Short Description */}
          <div className="md:col-span-2">
            <Image src={logo} alt="logo" className="w-40" />
            <p className="mt-2 text-gray-700 max-w-[400px]">
              Your trusted online pharmacy, offering a wide range of medicines
              and health products. Stay healthy, stay safe!
            </p>
            <p className="mt-2 text-gray-700 max-w-[400px]">
              We ensure 100% genuine products, fast shipping, and expert
              customer support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition flex items-center gap-1"
                >
                  <IoMdArrowDropright />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition flex items-center gap-1"
                >
                  <IoMdArrowDropright />
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition flex items-center gap-1"
                >
                  <IoMdArrowDropright />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition flex items-center gap-1"
                >
                  <IoMdArrowDropright />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400">Contact Us</h3>
            <p className="mt-2 text-gray-700 flex items-center gap-2">
              <BiCurrentLocation /> 123 Health Street, NY, USA
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <IoCall /> +1 234 567 890
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <MdEmail /> support@medicare.com
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-400 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-400 transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-3 text-center text-gray-700 text-sm">
          © {new Date().getFullYear()} MediCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
