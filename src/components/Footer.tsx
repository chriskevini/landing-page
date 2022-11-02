import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="pointer-events-auto grid place-items-center p-8">
      <div className="mb-3 flex gap-6 text-4xl">
        <a href="https://twitter.com/chriskevini">
          <FaTwitter />
        </a>
        <a href="https://ca.linkedin.com/in/chris-kevin-irineo-522480169">
          <FaLinkedin />
        </a>
        <a href="https://github.com/chriskevini">
          <FaGithub />
        </a>
      </div>
      <span>&#169; 2022 Chris Irineo</span>
    </div>
  );
}

export default Footer;
