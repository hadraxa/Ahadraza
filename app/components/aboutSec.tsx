import style from "./style/aboutSec.module.css";
import ButtonEffect from "./ui/buttons";

function AboutSec() {
  return (
    <div className={style.aboutSec}>
      <div className={style.aboutSec__text}>
        <div className={style.leftSec}>
          <div className={style.leftContent}>
            <h2>About Us</h2>
            <h1>Turning Ideas into Robust, Scalable Software</h1>
            <ButtonEffect
              text="Get In Touch"
              onClick={() => {
                const formSection = document.getElementById("form-section");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>
        </div>
        <div className={style.rightSec}>
          <div className={style.rightContent}>
            <p>
              With over three years of experience as a Software Developer, I
              specialize in designing, developing, and maintaining high-quality
              software solutions. I have a strong background in both front-end
              and back-end development, with a focus on scalable and efficient
              code.
            </p>
            <p>
              My role involves collaborating with cross-functional teams to
              build innovative applications and ensure seamless integration
              across platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSec;
