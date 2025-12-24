import Image from "next/image";
import Link from "next/link";

import { social } from "@/data";

const Footer = () => {
  return (
    <footer className="h-14 mt-2  text-amber-50 flex flex-row justify-center items-center gap-2 md:gap-4">
      {social.map((item) => (
        <Link className="" key={item.name} href={item.link} target="_blank">
          <Image
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] hover:-translate-y-1 transition-all duration-300 ease-out"
            src={item.img}
            alt={item.name}
            width={50}
            height={50}
          />
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
