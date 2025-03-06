// import React from "react";
// import Footer from "./Footer";

// const Communities = () => {
//   return (
//     <div>
//       <header style={{ backgroundColor: "#f4f4f4", padding: "15px 0", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
//         <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto" }}>
//           <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <div style={{ fontSize: "24px", fontWeight: "bold", color: "#2c3e50" }}>MyLiving</div>
//             <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
//               {['Home', 'Properties', 'Communities', 'About Us', 'Contact'].map((item) => (
//                 <li key={item} style={{ margin: "0 15px" }}>
//                   <a href={`/${item.toLowerCase().replace(/ /g, '')}.html`} style={{ textDecoration: "none", color: "#2c3e50", transition: "color 0.3s" }}
//                     onMouseOver={(e) => (e.target.style.color = "#3498db")}
//                     onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>{item}</a>
//                 </li>
//               ))}
//             </ul>
//             <a href="/login.html" style={{ backgroundColor: "#3498db", color: "white", padding: "10px 20px", textDecoration: "none", borderRadius: "5px" }}>Login / Sign Up</a>
//           </nav>
//         </div>
//       </header>

//       <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto", padding: "20px 0" }}>
//         <h1>Our Communities</h1>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "30px" }}>
//           {[
//             { title: "Sunset Garden Community", desc: "A luxurious community designed for modern living, featuring state-of-the-art amenities and a vibrant social atmosphere.", badge: "Premium", features: ["24/7 Security", "Swimming Pool", "Gym", "Community Events"] },
//             { title: "Urban Heights Society", desc: "Modern urban living with a focus on connectivity, innovation, and sustainable lifestyle choices.", badge: "New", features: ["Smart Home Tech", "Co-working Spaces", "Tennis Court", "Green Initiatives"] },
//             { title: "Maple Woods Residency", desc: "A serene community that blends natural beauty with modern comfort, perfect for families and professionals.", badge: "Popular", features: ["Park Spaces", "Family Events", "Library", "Cafe"] },
//           ].map((community) => (
//             <div key={community.title} style={{ border: "1px solid #e0e0e0", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", transition: "transform 0.3s", cursor: "pointer" }}
//               onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <div style={{ height: "250px", backgroundColor: "#f1f1f1", position: "relative" }}>
//                 <span style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#3498db", color: "white", padding: "5px 10px", borderRadius: "3px" }}>{community.badge}</span>
//               </div>
//               <div style={{ padding: "20px" }}>
//                 <h3 style={{ fontSize: "1.5em", marginBottom: "15px", color: "#2c3e50" }}>{community.title}</h3>
//                 <p style={{ color: "#7f8c8d", marginBottom: "15px" }}>{community.desc}</p>
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//                   {community.features.map((feature) => (
//                     <span key={feature} style={{ backgroundColor: "#f1f1f1", padding: "5px 10px", borderRadius: "3px", fontSize: "0.9em" }}>{feature}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     <Footer/>
//     </div>
//   );
// };

// export default Communities;


import React from "react";
import Footer from "./Footer";
import Header2 from "./Header2";

const Communities = () => {
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
    display: "flex",
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

  const communityGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  };

  const communityCardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
    cursor: "pointer",
  };

  const communityImageStyle = {
    height: "250px",
    backgroundColor: "#f1f1f1",
    position: "relative",
  };

  const communityBadgeStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#3498db",
    color: "white",
    padding: "5px 10px",
    borderRadius: "3px",
  };

  const communityContentStyle = {
    padding: "20px",
  };

  const communityTitleStyle = {
    fontSize: "1.5em",
    marginBottom: "15px",
    color: "#2c3e50",
  };

  const communityDescStyle = {
    color: "#7f8c8d",
    marginBottom: "15px",
  };

  const communityFeaturesStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  const featureBadgeStyle = {
    backgroundColor: "#f1f1f1",
    padding: "5px 10px",
    borderRadius: "3px",
    fontSize: "0.9em",
  };

  return (
    <div>
      {/* <header style={headerStyle}>
        <div style={containerStyle}>
          <nav style={navStyle}>
            <div style={logoStyle}>MyLiving</div>
            <ul style={navLinksStyle}>
              
        
                            <li style={navItemStyle} ><a href="/"  style={navLinkStyle}
                    onMouseOver={(e) => (e.target.style.color = "#3498db")}
                    onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Home</a></li>
                            <li style={navItemStyle}><a href="/properties"  style={navLinkStyle}
                    onMouseOver={(e) => (e.target.style.color = "#3498db")}
                    onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Properties</a></li>
                            <li style={navItemStyle}><a href="/communities"  style={navLinkStyle}
                    onMouseOver={(e) => (e.target.style.color = "#3498db")}
                    onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Communities</a></li>
                            <li style={navItemStyle}><a href="/about"  style={navLinkStyle}
                    onMouseOver={(e) => (e.target.style.color = "#3498db")}
                    onMouseOut={(e) => (e.target.style.color = "#2c3e50")}> About Us</a></li>
                            <li style={navItemStyle}><a href="/communities"  style={navLinkStyle}
                    onMouseOver={(e) => (e.target.style.color = "#3498db")}
                    onMouseOut={(e) => (e.target.style.color = "#2c3e50")}>Contact</a></li>
              </ul>
            <a href="/login.html" style={btnLoginStyle}>Login / Sign Up</a>
          </nav>
        </div>
      </header> */}
     <Header2/>
      <div style={containerStyle}>
        <h1>Our Communities</h1>
        <div style={communityGridStyle}>
          {[
            { title: "Sunset Garden Community", desc: "A luxurious community designed for modern living, featuring state-of-the-art amenities and a vibrant social atmosphere.", badge: "Premium", features: ["24/7 Security", "Swimming Pool", "Gym", "Community Events"] },
            { title: "Urban Heights Society", desc: "Modern urban living with a focus on connectivity, innovation, and sustainable lifestyle choices.", badge: "New", features: ["Smart Home Tech", "Co-working Spaces", "Tennis Court", "Green Initiatives"] },
            { title: "Maple Woods Residency", desc: "A serene community that blends natural beauty with modern comfort, perfect for families and professionals.", badge: "Popular", features: ["Park Spaces", "Family Events", "Library", "Cafe"] },
          ].map((community) => (
            <div key={community.title} style={communityCardStyle}>
              <div style={communityImageStyle}>
                <span style={communityBadgeStyle}>{community.badge}</span>
              </div>
              <div style={communityContentStyle}>
                <h3 style={communityTitleStyle}>{community.title}</h3>
                <p style={communityDescStyle}>{community.desc}</p>
                <div style={communityFeaturesStyle}>
                  {community.features.map((feature) => (
                    <span key={feature} style={featureBadgeStyle}>{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Communities;