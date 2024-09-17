import Logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import React from "react";

function Navbar() {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={Logo} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
