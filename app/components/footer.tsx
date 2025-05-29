function Footer() {
  const currentDate = new Date().getFullYear();
  const footerContainer: React.CSSProperties = {
    width: "100%",
    height: "7vh",
    background: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(25px) saturate(200%)",
    WebkitBackdropFilter: "blur(25px) saturate(200%)",
    backgroundColor: "rgba(3, 8, 109, 0.4)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
  };
  return (
    <div style={footerContainer}>
      <p>
        © {currentDate} Ahad Raza. Powered by {"</Me> "}and ☕
      </p>
    </div>
  );
}

export default Footer;
