import styles from "./style/Skills.module.css";

const items = [
  {
    id: 1,
    title: "Backend Development",
    rowSpan: 11,
    image: "/BackEnd.png",
    imageStyle: {
      height: "30vh",
      objectFit: "cover" as const,
      margin: "0 0 12px 0",
    },
  },
  {
    id: 2,
    title: "Frontend Development",
    rowSpan: 11,
    image: "/FrontEnd.png",
    imageStyle: {
      height: "29vh",
      objectFit: "cover" as const,
      margin: "0 0 40px -8px",
    },
  },
  {
    id: 3,
    title: "Cloud",
    rowSpan: 8,
    image: "/cloud.png",
    imageStyle: {
      height: "12vh",
      objectFit: "cover" as const,
      margin: "0 0 40px 0",
    },
  },
  {
    id: 4,
    title: "CMS",
    rowSpan: 10,
    image: "/cms.png",
    imageStyle: {
      height: "30vh",
      objectFit: "cover" as const,
      margin: "0 0 0 -5px",
    },
  },

  {
    id: 9,
    title: "Tools",
    rowSpan: 11,
    image: "/tools.png",
    imageStyle: {
      height: "29vh",
      objectFit: "cover" as const,
      margin: "0 0 28px 5px",
    },
  },

  {
    id: 10,
    title: "Databases",
    rowSpan: 6,
    image: "/Database.png",
    imageStyle: {
      height: "10vh",
      objectFit: "cover" as const,
      margin: "0 0 25px 2px",
    },
  },
  {
    id: 11,
    title: "Operating System",
    rowSpan: 7,
    image: "/OS.png",
    imageStyle: {
      height: "30vh",
      objectFit: "cover" as const,
      margin: "0 0 -30px 0",
    },
  },
];

const Skills: React.FC = () => (
  <div className={styles.MasonryMain}>
    <div className={styles.title}>
      <h1>Skills</h1>
    </div>
    <div className={styles.masonry}>
      {items.map(({ id, title, rowSpan, image, imageStyle }) => (
        <div
          key={id}
          className={styles.item}
          style={{ "--row-span": rowSpan } as React.CSSProperties}
        >
          <img
            src={image}
            alt={title}
            className={styles.skillImage}
            style={imageStyle}
          />
          <h3>{title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
