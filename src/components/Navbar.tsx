export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "3rem",                     // more top spacing
        left: "50%",
        transform: "translateX(-50%)",

        padding: "1.75rem 5rem",         // MUCH bigger nav height + width
        display: "flex",
        gap: "5rem",                     // more space between logo + links
        alignItems: "center",

        // Frosted glass
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        background: "rgba(255, 255, 255, 0.12)",

        // Bigger pill shape
        borderRadius: "40px",

        // Subtle border
        border: "1px solid rgba(255, 255, 255, 0.25)",

        zIndex: 50,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.8rem",            // bigger logo text
          letterSpacing: "0.5px",
          color: "white",
        }}
      >
        Rebeljoka's Portfolio
      </div>

      <ul
        style={{
          display: "flex",
          gap: "3.5rem",                 // bigger spacing between menu items
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li><a href="/" style={linkStyle}>Home</a></li>
        <li><a href="/projects" style={linkStyle}>Projects</a></li>
        <li><a href="/contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.45rem",                  // bigger menu text
  fontWeight: 500,
  opacity: 0.95,
};