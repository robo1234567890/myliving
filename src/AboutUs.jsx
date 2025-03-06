import React from "react";
import Footer from "./Footer";

import Header2 from "./Header2";

const AboutUs = () => {
    const styles = {
        containerabout: {
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px 0"
        },
        headerabout: {
            backgroundColor: "#ffffff",
            padding: "15px 0",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        },
        nav: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        logo: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "#2c3e50"
        },
        navLinks: {
            display: "flex",
            listStyle: "none",
            padding: 0,
        },
        navItem: {
            margin: "0 15px"
        },
        navLink: {
            textDecoration: "none",
            color: "#2c3e50",
            transition: "color 0.3s",
        },
        heroSection: {
            backgroundColor: "#3498db",
            color: "white",
            textAlign: "center",
            padding: "80px 20px"
        },
        aboutContent: {
            backgroundColor: "white",
            padding: "60px 0",
            marginTop: "30px"
        },
        aboutGrid: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center"
        },
        aboutText: {
            padding: "0 30px"
        },
        aboutImage: {
            backgroundColor: "#f1f1f1",
            height: "500px",
            borderRadius: "10px",
            backgroundImage: "url('/api/placeholder/600/500')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
    };

    return (
        <div>
            {/* <header style={styles.headerabout}>
                <div style={styles.containerabout}>
                    <nav style={styles.nav}>
                        <div style={styles.logo}>MyLiving</div>
                        <ul style={styles.navLinks}>
                            <li style={styles.navItem}><a href="Home.jsx" style={styles.navLink}>Home</a></li>
                            <li style={styles.navItem}><a href="properties.html" style={styles.navLink}>Properties</a></li>
                            <li style={styles.navItem}><a href="communities.html" style={styles.navLink}>Communities</a></li>
                            <li style={styles.navItem}><a href="aboutus.html" style={styles.navLink}>About Us</a></li>
                            <li style={styles.navItem}><a href="contact.html" style={styles.navLink}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header> */}
            <Header2/>
            <section style={styles.heroSection}>
                <div style={styles.container}>
                    <h1>Reimagining Community Living</h1>
                    <p>At MyLiving, we believe that a home is more than just a place to live. It's about creating connections, fostering relationships, and building a lifestyle that inspires and supports your dreams.</p>
                </div>
            </section>

            <section style={styles.aboutContent}>
                <div style={styles.container}>
                    <div style={styles.aboutGrid}>
                        <div style={styles.aboutText}>
                            <h2>Who We Are</h2>
                            <p>Founded in 2022, MyLiving emerged from a simple yet powerful vision: to transform how people experience living spaces.</p>
                            <p>We carefully curate communities that offer more than just living spaces – we create environments where people can thrive, connect, and grow together.</p>
                        </div>
                        <div style={styles.aboutImage}></div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default AboutUs;
