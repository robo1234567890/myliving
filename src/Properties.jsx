import React from "react";
import Footer from "./Footer";

const MyLivingProperties = () => {
  const containerProperty = {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 0",
  };

  const propertyCardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  };

  const propertyCardHoverStyle = {
    transform: "scale(1.05)",
  };

  return (
    <div>
      <header style={{ backgroundColor: "#f4f4f4", padding: "15px 0", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <div style={containerProperty}>
          <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#2c3e50" }}>MyLiving</div>
            <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
              {['Home', 'Properties', 'Communities', 'About Us', 'Contact'].map((item) => (
                <li key={item} style={{ margin: "0 15px" }}>
                  <a href={`/${item.toLowerCase().replace(/ /g, '')}`} style={{ textDecoration: "none", color: "#2c3e50", transition: "color 0.3s" }}>{item}</a>
                </li>
              ))}
            </ul>
            <a href="/login" style={{ backgroundColor: "#3498db", color: "white", padding: "10px 20px", textDecoration: "none", borderRadius: "5px" }}>Login / Sign Up</a>
          </nav>
        </div>
      </header>

      <div style={containerProperty}>
        <h1>Available Properties</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px" }}>
          <div style={propertyCardStyle} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <div style={{ height: "250px", backgroundColor: "#f1f1f1", position: "relative" }}>
              <span style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#3498db", color: "white", padding: "5px 10px", borderRadius: "3px" }}>Premium</span>
            </div>
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>Sunset Garden Community</h3>
              <div style={{ color: "#7f8c8d", marginBottom: "10px" }}>Downtown, City Center</div>
              <div style={{ color: "#7f8c8d", marginBottom: "10px" }}>$1,200 - $2,500 / month</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {['2-4 BHK', 'Pool', 'Gym', 'Security'].map((feature) => (
                  <span key={feature} style={{ backgroundColor: "#f1f1f1", padding: "5px 10px", borderRadius: "3px", fontSize: "0.9em" }}>{feature}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MyLivingProperties;
