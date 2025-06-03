import style from "./style/heroSec.module.css";
import Header from "./header";
import SideBar from "./sideBar";
import HeroContent from "./hero-content";
import InfoBox from "./infoBox";
import MainBg from "./mainBg";

function HeroSec() {
  return (
    <MainBg>
      <div className={style.main}>
        <Header />
        <SideBar />
        <HeroContent />
        <div className={style.infoBoxSec}>
        <InfoBox
          cards={[
            { topText: "age", bottomText: "20/y" },
            { topText: "experiences", bottomText: "4/y" },
            { topText: "Projects", bottomText: "10+" },
          ]}
          customBottomVal="20px"
        />
</div>
        <div className={style.infoBoxSec}>
          <InfoBox
            cards={[
              { topText: "Happy Clients", bottomText: "10+" },
              { topText: "Languages", bottomText: "20+" },
              { topText: "Certifications", bottomText: "2" },
            ]}
            customBottomVal="-100%"
          />
        </div>
      </div>
    </MainBg>
  );
}

export default HeroSec;
