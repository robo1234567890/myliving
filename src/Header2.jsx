// import React from "react";

// const Header2 = () => {
//     const headerStyle = {
//         backgroundColor: "#f4f4f4",
//         padding: "15px 0",
//         boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//       };
    
//       const containerStyle = {
//         width: "90%",
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "20px 0",
//       };
    
//       const navStyle = {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//       };
    
//       const logoStyle = {
//         fontSize: "24px",
//         fontWeight: "bold",
//         color: "#2c3e50",
//       };
    
//       const navLinksStyle = {
//         display: "flex",
//         listStyle: "none",
//         margin: 0,
//         padding: 0,
//       };
    
//       const navItemStyle = {
//         margin: "0 15px",
//       };
    
//       const navLinkStyle = {
//         textDecoration: "none",
//         color: "#2c3e50",
//         transition: "color 0.3s",
//       };
    
//       const btnLoginStyle = {
//         backgroundColor: "#3498db",
//         color: "white",
//         padding: "10px 20px",
//         textDecoration: "none",
//         borderRadius: "5px",
//       };
    

//   return (
//     <header style={headerStyle}>
//       <div style={containerStyle}>
//         <nav style={navStyle}>
//           <div style={logoStyle}>MyLiving</div>
//           <ul style={navLinksStyle}>
//             <li style={navItemStyle}><a href="/" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Home</a></li>
//             <li style={navItemStyle}><a href="/properties" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Properties</a></li>
//             <li style={navItemStyle}><a href="/communities" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Communities</a></li>
//             <li style={navItemStyle}><a href="/about" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>About Us</a></li>
//             <li style={navItemStyle}><a href="/communities" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Contact</a></li>
//           </ul>
//           <a href="/login.html" style={btnLoginStyle}>Login / Sign Up</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header2;


import React, { useEffect, useState } from "react";

const Header2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize(); // Check the initial size
    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const headerStyle = {
    backgroundColor: "#f4f4f4",
    padding: "15px 0",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const containerStyle = {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 0",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2c3e50",
  };

  const navLinksStyle = {
    display: isMobile ? "none" : "flex", // Hide links on mobile
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const navItemStyle = {
    margin: "0 15px",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#2c3e50",
    transition: "color 0.3s",
  };

  const btnLoginStyle = {
    backgroundColor: "#3498db",
    color: "white",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <nav style={navStyle}>
          <div style={logoStyle}>MyLiving</div>
          <ul style={navLinksStyle}>
            <li style={navItemStyle}><a href="/" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Home</a></li>
            <li style={navItemStyle}><a href="/properties" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Properties</a></li>
            <li style={navItemStyle}><a href="/communities" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Communities</a></li>
            <li style={navItemStyle}><a href="/about" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>About Us</a></li>
            <li style={navItemStyle}><a href="/contact" style={navLinkStyle} onMouseOver={(e) => (e.target.style.color = "#3498db")} onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Contact Us</a></li>
          </ul>
          <a href="/login" style={btnLoginStyle}>Login / Sign Up</a>
        </nav>
      </div>
    </header>
  );
};

export default Header2;