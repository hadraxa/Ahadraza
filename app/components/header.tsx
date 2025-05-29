import style from "./style/Header.module.css";
import ButtonEffect from "./ui/buttons";

function Header() {
  return (
    <header className={style.header}>
      <div className={style["head-container"]}>
        <div className={style.logo}>Ahad Raza</div>
        <div className={style.text}>The Creator</div>
        <div className={style.socialIcons}>
          <ButtonEffect
            text="Download CV"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/MyCV.pdf";
              link.download = "MyCV.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
