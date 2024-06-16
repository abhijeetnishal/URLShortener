import Image from "next/image";
import logo from "./../../public/chain.png";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-2 bg-[#ebebeb]">
      {/* <div className="flex flex-row items-center mb-3">
        <Image alt="logo" className="w-5 h-5" src={logo} />
        <p className="ml-2 text-xl font-medium">Short.url</p>
      </div> */}
      <p className="text-[#7c91af] text-lg mr-4">© 2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
