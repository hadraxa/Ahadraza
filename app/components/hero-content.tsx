import style from "./style/hero-content.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    href: "https://linkedin.com/",
    className: style.iconLink + " " + style.linkedin,
    icon: <FaLinkedinIn size={25} />, 
    label: "LinkedIn",
  },
  {
    href: "mailto:yourmail@gmail.com",
    className: style.iconLink + " " + style.gmail,
    icon: <SiGmail size={25} />, 
    label: "Gmail",
  },
  {
    href: "https://github.com/",
    className: style.iconLink + " " + style.github,
    icon: <FaGithub size={25} />, 
    label: "GitHub",
  },
];

function HeroContent() {
  return (
    <div className={style["mainContent"]}>
      <p className={style["title"]}>SOFTWARE DEVELOPER</p>
      <span className={style["myname"]}>Ahad Raza</span>
      <div className={style["socialIcons"]}>
        {socialLinks.map(({ href, className, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
      <img
        src="https://flagcdn.com/w40/pk.png"
        srcSet="https://flagcdn.com/w80/pk.png 2x"
        width="40"
        height="27"
        alt="Pakistan"
      />
    </div>
  );
}

export default HeroContent;
