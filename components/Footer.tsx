import Link from "next/link";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#14274A] text-[#F7F7F7] w-full py-6">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-around min-h-[200px] ">
        <div className="flex flex-col gap-4 mb-4 md:mb-0">
          <div className=" text-center md:text-start">
            <h1 className="text-3xl font-bold">Luxury</h1>
            <p className="text-sm">Hotel</p>
          </div>
          <div className="text-center md:text-start text-xs">
            <p>497 Evergreen Rd. Roseville, CA 95673</p>
            <p>+44 345 678 903</p>
            <p>luxury_hotels@gmail.com</p>
          </div>
        </div>
        <div className="text-center md:text-start flex flex-col min-w-[140px] gap-4 mb-4 md:mb-0">
          <Link href={"/#about"}>About Us</Link>
          <Link href={"/contact-us"}>Contact</Link>
          <Link href={"/"}>Terms & Conditions</Link>
        </div>
        <div className="sm:w-full md:w-auto flex flex-col justify-center min-w-[140px] gap-4 mb-4 md:mb-0">
          <Link
            href={"/"}
            className="flex justify-center md:justify-start gap-4 items-center"
          >
            <FaFacebookF size={24} />
            <span>Facebook</span>
          </Link>
          <Link
            href={"/"}
            className="flex justify-center md:justify-start gap-4 items-center"
          >
            <FaTwitter size={24} />
            <span>Twitter</span>
          </Link>
          <Link
            href={"/"}
            className="flex justify-center md:justify-start gap-4 items-center"
          >
            <FaInstagram size={24} />
            <span>Instagram</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 mb-4 md:mb-0">
          <h2 className="text-md font-bold">Subscribe to our newsletter</h2>
          <div className="flex text-[#14274a]">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-[#14274a] pl-3 border-[#e0b973] border-2"
            />
            <button className="bg-[#e0b973] p-3">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
