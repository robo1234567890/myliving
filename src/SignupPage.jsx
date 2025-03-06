import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const SignupPage = () => {
  return (
    <div>
      {/* <header style={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "20px 0"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#4a6bff" }}>MyLiving</div>
          <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
            {['Home', 'Properties', 'Communities', 'About Us', 'Contact'].map((item, index) => (
              <li key={index} style={{ marginLeft: "30px" }}>
                <a href={`/${item.toLowerCase().replace(' ', '')}`} style={{ textDecoration: "none", color: "#333", fontWeight: 500 }}>{item}</a>
              </li>
            ))}
          </ul>
          <a href="/login" style={{
            backgroundColor: "#4a6bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "500",
            textDecoration: "none"
          }}>Login / Sign Up</a>
        </div>
      </header> */}
      <Header/>
      <section style={{
        padding: "80px 0",
        minHeight: "calc(100vh - 400px)",
        display: "flex",
        alignItems: "center"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden", backgroundColor: "white" }}>
          <div style={{ position: "relative", background: "url('community-image.jpg') center/cover", minHeight: "600px" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(135deg, rgba(74, 107, 255, 0.9), rgba(107, 74, 255, 0.8))", color: "white", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Join Our Community</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>Create an account to begin your journey towards finding your perfect home in a vibrant community.</p>
            </div>
          </div>
          
          <div style={{ padding: "50px 40px" }}>
            <h2 style={{ fontSize: "28px", color: "#333", marginBottom: "10px" }}>Sign Up</h2>
            <p style={{ color: "#666" }}>Already have an account? <a href="/login" style={{ color: "#4a6bff", textDecoration: "none", fontWeight: "500" }}>Log In</a></p>
            <form>
              <div style={{ display: "flex", gap: "15px" }}>
                <input type="text" placeholder="First name" required style={{ flex: 1, padding: "12px 15px", border: "1px solid #ddd", borderRadius: "5px" }} />
                <input type="text" placeholder="Last name" required style={{ flex: 1, padding: "12px 15px", border: "1px solid #ddd", borderRadius: "5px" }} />
              </div>
              <input type="email" placeholder="Enter your email" required style={{ width: "100%", padding: "12px 15px", border: "1px solid #ddd", borderRadius: "5px", marginTop: "15px" }} />
              <input type="tel" placeholder="Enter your phone number" required style={{ width: "100%", padding: "12px 15px", border: "1px solid #ddd", borderRadius: "5px", marginTop: "15px" }} />
              <input type="password" placeholder="Create a password" required style={{ width: "100%", padding: "12px 15px", border: "1px solid #ddd", borderRadius: "5px", marginTop: "15px" }} />
              <input type="password" placeholder="Confirm your password" required style={{ width: "100%", padding: "12px 15px", border: "1px solid #ddd", borderRadius: "5px", marginTop: "15px" }} />
              <div style={{ display: "flex", alignItems: "flex-start", fontSize: "14px", marginTop: "15px" }}>
                <input type="checkbox" required style={{ marginRight: "10px", marginTop: "3px" }} />
                <label>I agree to the <a href="#" style={{ color: "#4a6bff", textDecoration: "none" }}>Terms of Service</a> and <a href="#" style={{ color: "#4a6bff", textDecoration: "none" }}>Privacy Policy</a></label>
              </div>
              <button type="submit" style={{ width: "100%", padding: "14px", backgroundColor: "#4a6bff", color: "white", border: "none", borderRadius: "5px", fontSize: "16px", fontWeight: "500", cursor: "pointer", marginTop: "15px" }}>Create Account</button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default SignupPage;
