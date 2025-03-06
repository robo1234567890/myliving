import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpDisabled, setIsOtpDisabled] = useState(true);

  const sendOtp = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("otp", generatedOtp);
    localStorage.setItem("userEmail", email);
    alert("OTP sent to " + email + ": " + generatedOtp);
    setIsOtpDisabled(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const storedOtp = localStorage.getItem("otp");
    if (otp === storedOtp) {
      localStorage.setItem("loggedInUser", localStorage.getItem("userEmail"));
      alert("Login Successful!");
      window.location.href = "dashboard.html?user=" + localStorage.getItem("userEmail");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      {/* <header style={{ backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", position: "sticky", top: 0, zIndex: 1000, padding: "20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#4a6bff" }}>MyLiving</div>
          <nav>
            <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { name: "Home", link: "index.html" },
                { name: "Properties", link: "properties.html" },
                { name: "Communities", link: "communities.html" },
                { name: "About Us", link: "aboutus.html" },
                { name: "Contact", link: "contact.html" }
              ].map((item) => (
                <li key={item.name} style={{ marginLeft: "30px" }}>
                  <a href={item.link} style={{ textDecoration: "none", color: "#333", fontWeight: "500" }}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="login.html" style={{ backgroundColor: "#4a6bff", color: "white", padding: "10px 20px", borderRadius: "5px", textDecoration: "none", fontWeight: "500" }}>Login / Sign Up</a>
        </div>
      </header>
      */}

      <Header/>
      <section style={{ padding: "80px 0", minHeight: "calc(100vh - 400px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden", backgroundColor: "white", maxWidth: "1000px" }}>
          <div style={{ background: "url('community-image.jpg') center/cover", position: "relative", minHeight: "600px" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(135deg, rgba(74, 107, 255, 0.9), rgba(107, 74, 255, 0.8))", color: "white", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Welcome Back!</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>Login to access your account and discover your perfect community living experience.</p>
            </div>
          </div>
          <div style={{ padding: "50px 40px" }}>
            <div>
              <h2 style={{ fontSize: "28px", color: "#333", marginBottom: "10px" }}>Log In</h2>
              <p>Don't have an account? <a href="/signup" style={{ color: "#4a6bff", textDecoration: "none", fontWeight: "500" }}>Sign Up</a></p>
            </div>
            <form onSubmit={handleLogin}>
              <div>
                
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px" }} />
                <button type="button" onClick={sendOtp} style={{ marginTop: "10px", padding: "10px", backgroundColor: "#4a6bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Send OTP</button>
              </div>
              <br></br>
              <div>
                
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required disabled={isOtpDisabled} style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px" }} />
              </div>
              <div>
                <br></br>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px" }} />
              </div>
              <button type="submit" style={{ width: "100%", padding: "14px", backgroundColor: "#4a6bff", color: "white", border: "none", borderRadius: "5px", fontSize: "16px", fontWeight: "500", cursor: "pointer", marginTop: "20px" }}>Log In</button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default LoginPage;
