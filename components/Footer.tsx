import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";
const Navbar = () => {
  return (
    <footer className="flex text-black-100 mt-5 px-10 flex-col border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width="118"
            height="18"
            className="object-contain"
          ></Image>
          <p className="text-base text-gray-700">
            Car Showcase <br /> All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Car Showcase. All Rights Reserved &copy;</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms Of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;
