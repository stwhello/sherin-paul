const Footer = () => {
  return (
    <footer
      style={{
        background: "#6C0820",
        minHeight: "clamp(60px, 10vh, 120px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 clamp(20px, 6vw, 120px)",
      }}
    >
      <p
        className="body-font"
        style={{
          color: "#FFFFFF",
          fontSize: "clamp(12px, 1vw, 18px)",
          fontWeight: 400,
          textAlign: "center",
          margin: 0,
          opacity: 0.9,
        }}
      >
        © {new Date().getFullYear()} Sherin Paul. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
