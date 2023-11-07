"use client";

import { useEffect, useState } from "react";
import { headerData } from "../data";
import Nav from "./Nav";
import Socials from "./Socials";
import { TiThMenuOutline } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import NavMobile from "./NavMobile";

const Header = () => {
  const { logo } = headerData;
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <hearder
      className={`${
        isActive ? "h-[100px] lg:h-[110px] shadow-lg" : "h-[120px] lg:h-[150px]"
      } fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        <Link
          // to="home"
          href={"/"}
          smooth={desktopMode}
          spy={true}
          className="cursor-pointer"
        >
          <Image src={logo} width={188} height={90} alt="image" />
        </Link>
        <div className="hidden xl:flex">
          <Nav />
        </div>
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl" />
        </div>
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0"} ${
            isActive
              ? "top-[100px] lg:top-[110px]"
              : "top-[120px] lg:top-[150px]"
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile />
        </div>
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </hearder>
  );
};

export default Header;
