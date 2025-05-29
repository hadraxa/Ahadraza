import styles from "./style/projects.module.css";

const projectImages = [
  "httpsafi.thesak.ltd.png",
  "httpscureandcraft.com.png",
  "XOTC Website.jpeg",
  "chat-app.png",
];

function Projects() {
  return (
    <div className={styles.projectsCOntainer}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <div className={styles.cardContainer}>
        {projectImages.map((src, index) => (
          <div key={index} className={styles.projectsCards}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
