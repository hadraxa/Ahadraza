import style from "./style/infoSec.module.css";

function InfoSec() {
  return (
    <div className={style.infoContainer}>
      <div className={style.leftSide}>
        <div className={style.leftSideContent}>
          <h1>About Me</h1>
          <p>
            I'm a passionate web developer with a knack for creating dynamic and
            responsive web applications. I love coding and am always eager to
            learn new technologies.
          </p>
        </div>
      </div>
      <div className={style.rightSide}>
        <div className={style.rightSideContent}>
          <h1>Skills</h1>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfoSec;
