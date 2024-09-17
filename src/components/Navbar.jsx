import Logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <div className="m-8 flex items-center justify-end gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/jay-mehta031/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.linkedin.com/in/jay-mehta031/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://github.com/jay31mehta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
