import React, { useEffect, useState } from 'react';
import Header2 from './Header2';
import Footer from './Footer';

const ContactUs = () => {
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

    const styles = {
        container: {
            width: '90%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px 0',
        },
        contactContainer: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', // Single column on mobile
            gap: '30px',
            marginTop: '30px',
        },
        contactInfo: {
            backgroundColor: '#f9f9f9',
            padding: '30px',
            borderRadius: '10px',
        },
        contactForm: {
            backgroundColor: '#f9f9f9',
            padding: '30px',
            borderRadius: '10px',
        },
        heading: {
            color: '#2c3e50',
            marginBottom: '20px',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            color: '#2c3e50',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
        },
        textarea: {
            width: '100%',
            height: '150px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
        },
        submitBtn: {
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        footer: {
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '30px 0',
            marginTop: '30px',
        },
        copyright: {
            textAlign: 'center',
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid #34495e',
        },
    };

    return (
        <div>
            {/* <header style={styles.header}>
                <div style={styles.container}>
                    <nav style={styles.nav}>
                        <div style={styles.logo}>MyLiving</div>
                        <ul style={styles.navLinks}>
                            <li><a href="index.html" style={styles.navLink}>Home</a></li>
                            <li><a href="properties.html" style={styles.navLink}>Properties</a></li>
                            <li><a href="communities.html" style={styles.navLink}>Communities</a></li>
                            <li><a href="aboutus.html" style={styles.navLink}>About Us</a></li>
                            <li><a href="contact.html" style={styles.navLink}>Contact</a></li>
                        </ul>
                        <a href="login.html" style={styles.btn}>Login / Sign Up</a>
                    </nav>
                </div>
            </header> */}
           <Header2 />
            <div style={styles.container}>
                <div style={styles.contactContainer}>
                    <div style={styles.contactInfo}>
                        <h2 style={styles.heading}>Contact Information</h2>
                        <div>
                            <p><strong>Address:</strong> 123 Business Avenue, Suite 100, City</p>
                            <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                            <p><strong>Email:</strong> support@myliving.com</p>
                            <p><strong>Hours:</strong> Monday - Friday: 9 AM to 6 PM</p>
                        </div>
                        <div>
                            <h3 style={styles.heading}>Follow Us</h3>
                            <p>Connect with us on social media for the latest updates and community insights.</p>
                            {/* Add social media icons/links here */}
                        </div>
                    </div>
                    <div style={styles.contactForm}>
                        <h2 style={styles.heading}>Send Us a Message</h2>
                        <form>
                            <div style={styles.formGroup}>
                                <label style={styles.label} htmlFor="name">Full Name</label>
                                <input style={styles.input} type="text" id="name" name="name" required />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label} htmlFor="email">Email Address</label>
                                <input style={styles.input} type="email" id="email" name="email" required />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label} htmlFor="phone">Phone Number</label>
                                <input style={styles.input} type="tel" id="phone" name="phone" />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label} htmlFor="message">Your Message</label>
                                <textarea style={styles.textarea} id="message" name="message" required></textarea>
                            </div>
                            <div style={styles.formGroup}>
                                <button type="submit" style={styles.submitBtn}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;