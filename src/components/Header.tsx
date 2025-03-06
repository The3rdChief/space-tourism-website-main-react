import logo from "../assets/shared/logo.svg";
import close from "../assets/shared/icon-close.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import { Link, useLocation } from "react-router";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = () => {
    if (location.pathname === "/") {
      return "first:after:bg-white hover:after:bg-font-blue";
    } else if (location.pathname === "/destination") {
      return "[&:nth-child(2)]:after:bg-white hover:after:bg-font-blue";
    } else if (location.pathname === "/crew") {
      return "[&:nth-child(3)]:after:bg-white hover:after:bg-font-blue";
    } else if (location.pathname === "/technology") {
      return "last:after:bg-white hover:after:bg-font-blue";
    }
  };

  return (
    <>
      <header className="flex items-center justify-between gap-x-8 lg:pt-10 max-[40rem]:px-6 max-[40rem]:h-22">
        <div className="sm:pl-6">
          <img src={logo} alt="logo" />
        </div>

        <nav
          className={`bg-white/10 z-2 backdrop-blur-xl fixed top-0 bottom-0 ${
            isOpen ? "right-0" : "-right-full"
          } sm:right-0 max-[40rem]:transition-all duration-300 w-[65vw] max-[40rem]:pl-8 max-[40rem]:gap-12 sm:w-auto sm:relative flex flex-col sm:flex-row sm:justify-center sm:items-stretch sm:px-12 sm:h-24 [&>div]:w-full`}
        >
          <div className="sm:hidden h-21 flex items-center justify-end pr-6">
            <button
              className="cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={close} alt="close" />
            </button>
          </div>
          <div className="flex flex-col gap-8 tracking-widest sm:flex-row sm:items-center sm:gap-12 sm:[&>a]:h-full sm:[&>a]:text-center [&>a]:flex [&>a]:gap-2 [&>a]:uppercase [&>a]:place-items-center [&>a]:relative [&>a]:after:content-[''] [&>a]:after:absolute sm:[&>a]:after:left-0 max-[40rem]:[&>a]:after:top-0 [&>a]:after:right-0 [&>a]:after:transition-all [&>a]:after:duration-200 [&>a]:after:bottom-0 sm:[&>a]:after:h-0.5  max-[40rem]:[&>a]:after:w-0.75">
            <Link to="/" onClick={()=> setIsOpen(false)} className={`${activeClass()}`}>
              <b>00</b> Home
            </Link>
            <Link to="/destination" onClick={()=> setIsOpen(false)} className={`${activeClass()}`}>
              <b>01</b> Destination
            </Link>
            <Link to="/crew" onClick={()=> setIsOpen(false)} className={`${activeClass()}`}>
              <b>02</b> Crew
            </Link>
            <Link to="/technology" onClick={()=> setIsOpen(false)} className={`${activeClass()}`}>
              <b>03</b> Technology
            </Link>
          </div>
        </nav>

        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <img src={menu} alt="menu" className="cursor-pointer" />
        </button>
      </header>
    </>
  );
};

export default Header;
