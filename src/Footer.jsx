const Footer = () => {
    const footerStyle = {
        backgroundColor: '#222',
        color: '#fff',
        padding: '60px 0 20px',
        textAlign: 'center'
    };
    
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
    };
    
    const columnStyle = {
        textAlign: 'left'
    };
    
    const headingStyle = {
        fontSize: '18px',
        marginBottom: '20px',
        position: 'relative'
    };
    
    const headingAfterStyle = {
        content: "''",
        display: 'block',
        width: '30px',
        height: '2px',
        background: '#4a6bff',
        marginTop: '10px'
    };
    
    const linkStyle = {
        textDecoration: 'none',
        color: '#ccc'
    };
    
    const copyrightStyle = {
        textAlign: 'center',
        paddingTop: '20px',
        borderTop: '1px solid #444',
        fontSize: '14px',
        color: '#888'
    };
    
    return (
        <footer style={footerStyle}>
            <div className="container">
                <div style={gridStyle}>
                    <div style={columnStyle}>
                        <h3 style={headingStyle}>MyLiving</h3>
                        <p>Find your perfect home in vibrant communities with like-minded neighbors and modern amenities.</p>
                    </div>
                    <div style={columnStyle}>
                        <h3 style={headingStyle}>Quick Links</h3>
                        <ul>
                            <li><a href="#" style={linkStyle}>Home</a></li>
                            <li><a href="#" style={linkStyle}>About Us</a></li>
                            <li><a href="#" style={linkStyle}>Properties</a></li>
                            <li><a href="#" style={linkStyle}>Communities</a></li>
                            <li><a href="#" style={linkStyle}>Contact Us</a></li>
                        </ul>
                    </div>
                    <div style={columnStyle}>
                        <h3 style={headingStyle}>Popular Locations</h3>
                        <ul>
                            <li><a href="#" style={linkStyle}>Downtown</a></li>
                            <li><a href="#" style={linkStyle}>West End</a></li>
                            <li><a href="#" style={linkStyle}>North Side</a></li>
                            <li><a href="#" style={linkStyle}>Hillside</a></li>
                            <li><a href="#" style={linkStyle}>Green Valley</a></li>
                        </ul>
                    </div>
                    <div style={columnStyle}>
                        <h3 style={headingStyle}>Get In Touch</h3>
                        <ul>
                            <li><a href="#" style={linkStyle}>support@myliving.com</a></li>
                            <li><a href="#" style={linkStyle}>+1 (800) 123-4567</a></li>
                            <li>123 Business Avenue, Suite 100, City</li>
                        </ul>
                    </div>
                </div>
                <div style={copyrightStyle}>
                    <p>&copy; 2025 MyLiving. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
