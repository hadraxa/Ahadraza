import React, { useState } from "react";
import style from "./style/sideBar.module.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

function SideBar() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleHamburgerClick = () => {
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 400);
    } else {
      setOpen(true);
    }
  };

  return (
    <React.Fragment>
      <button
        className={style.hamburger}
        aria-label="Open sidebar"
        onClick={handleHamburgerClick}
      >
        <GiHamburgerMenu size={28} />
      </button>
      <div
        className={
          style.sideBar +
          (open ? " " + style.open : "") +
          (closing ? " " + style.closing : "")
        }
      >
        <div className={style.sideBarContainer}>
          <a
            className={style.iconButton + " " + style.whatsapp}
            data-tooltip="Whatsapp"
            href="https://wa.me/923153980168  
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            className={style.iconButton + " " + style.instagram}
            data-tooltip="Instagram"
            href="https://www.instagram.com/ahadraza779857/?igsh=MWN4YmdoMzU3NncwbQ%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={22} />
          </a>
          <a
            className={style.iconButton + " " + style.telegram}
            data-tooltip="Telegram"
            href="https://t.me/Ahadraza77987"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelegram size={22} />
          </a>
          <a
            className={style.iconButton + " " + style.github}
            data-tooltip="GitHub"
            href="https://github.com/AhadRaxa?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            className={style.iconButton + " " + style.gmail}
            data-tooltip="Gmail"
            href="mailto:ahadraza77987@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail size={22} />
          </a>
          <a
            className={style.iconButton + " " + style.linkedin}
            data-tooltip="LinkedIn"
            href="www.linkedin.com/in/ahad-raza-78b729296"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            className={style.iconButton + " " + style.download}
            data-tooltip="Download CV"
            href="/MyCV.pdf"
            download
          >
            <FaDownload size={22} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideBar;
