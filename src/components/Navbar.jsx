import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex items-center  justify-between px-10 h-[70px]
    z-50 bg-white shadow-md sticky top-0"
    >
      <Link to={"/"}>
        <img src="/images/logo.svg" alt="" className="w-[110px]" />
      </Link>
      <Link to={"/login"}>
        <img src="/icons/user.svg" alt="" />
      </Link>
    </nav>
  );
};

export default Navbar;
