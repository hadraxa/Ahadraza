import style from "./style/loader.module.css";

const Loader = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.terminalLoader}>
        <div className={style.terminalHeader}>
          <div className={style.terminalTitle}>Status</div>
          <div className={style.terminalControls}>
            <div className={`${style.control} ${style.close}`} />
            <div className={`${style.control} ${style.minimize}`} />
            <div className={`${style.control} ${style.maximize}`} />
          </div>
        </div>
        <div className={style.text}>Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
