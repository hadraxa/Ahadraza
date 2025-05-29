import React from "react";
import styles from "./style/edu_exp.module.css";
import Icon from "./ui/icon";

const eduItems = [
  {
    icon: "/Graduation.png",
    duration: { color: '#8b9efffb', background: '#1233d54a', text: '09/2024' },
    title: "Intermediate in Computer Science",
    sub: "Pak Oasis Education System"
  },
  {
    icon: "/Learn Statistic.png",
    duration: { color: '#29d512fb', background: '#29d51248', text: '02/2023 - Present' },
    title: "Diploma In Software Engineering",
    sub: "Aptech Computer Education"
  },
  {
    icon: "/Coding Editing Interface 3D Model.png",
    duration: { color: '#efff0dfb', background: '#efff0d46', text: '03/2024 - 04/2024' },
    title: "Full-stack Developer intern",
    sub: "The sak"
  },
  {
    icon: "/Searching Money.png",
    duration: { color: '#29d512fb', background: '#29d51248', text: '11/2024 - Present' },
    title: "Freelancer",
    sub: "Fiverr,Upwork"
  }
];

function Edu_exp() {
  return (
    <div className={styles.edu_exp_container}>
      <h2 className={styles.edu_exp_title}>Education & Experience</h2>
      <div className={styles.gridContainer}>
        {eduItems.map((item, idx) => (
          <div className={styles.gridItem} key={idx}>
            <div className={styles.icon}>
              <Icon src={item.icon} />
            </div>
            <div className={styles.text_content}>
              <div className={styles.duration} style={{ color: item.duration.color, background: item.duration.background }}>{item.duration.text}</div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.sub_title}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Edu_exp;
