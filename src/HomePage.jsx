import React from 'react';
import './Homepage.css'; // Ensure you have the CSS file in the same directory
import Footer from './Footer';
import Header from './Header';

const HomePage = () => {
    return (
        <div>
            {/* Header */}
            {/* <header>
                <div className="container">
                    <nav>
                        <div className="logo">MyLiving</div>
                        <ul className="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/properties">Properties</a></li>
                            <li><a href="/communities">Communities</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/communities">Contact</a></li>
                        </ul>
                        <a href="login.html" className="btn">Login / Sign Up</a>
                    </nav>
                </div>
            </header> */}
            <Header/>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Find Your Perfect Community</h1>
                    <p>Discover premium apartments, villas, and homes in thriving communities with like-minded neighbors and modern amenities.</p>
                    <div className="search-box">
                        <input type="text" placeholder="Search by location, community name, or property type..." />
                        <button className="btn">Search</button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <h2 className="section-title">Why Choose MyLiving</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🏡</div>
                            <h3>Verified Communities</h3>
                            <p>All our communities are thoroughly verified to ensure quality living standards and amenities.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>Like-minded Neighbors</h3>
                            <p>Connect with neighbors who share your interests, values, and lifestyle preferences.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure Environment</h3>
                            <p>Our communities prioritize safety with 24/7 security and modern surveillance systems.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💰</div>
                            <h3>Zero Brokerage</h3>
                            <p>Deal directly with owners and save on brokerage fees. No hidden charges!</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Community App</h3>
                            <p>Access community features, pay maintenance, and connect with neighbors through our app.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🌿</div>
                            <h3>Modern Amenities</h3>
                            <p>Enjoy premium facilities like swimming pools, gyms, parks, and recreational areas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <div className="container">
                    <h2 className="section-title">How It Works</h2>
                    <div className="steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h3>Search</h3>
                            <p>Explore communities based on your location, budget, and preferences.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h3>Connect</h3>
                            <p>Connect directly with property owners or community managers.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h3>Visit</h3>
                            <p>Schedule visits to your shortlisted properties and communities.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">4</div>
                            <h3>Move In</h3>
                            <p>Complete the paperwork, make the payment, and move into your new home.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Properties Section */}
            <section className="properties">
                <div className="container">
                    <h2 className="section-title">Featured Communities</h2>
                    <div className="property-grid">
                        <div className="property-card">
                            <div className="property-image">
                                <span className="property-badge">Premium</span>
                            </div>
                            <div className="property-content">
                                <h3 className="property-title">Sunset Garden Community</h3>
                                <div className="property-location">
                                    <span>Downtown, City Center</span>
                                </div>
                                <div className="property-price">$1,200 - $2,500 / month</div>
                                <div className="property-features">
                                    <span>2-4 BHK</span>
                                    <span>Pool</span>
                                    <span>Gym</span>
                                    <span>Security</span>
                                </div>
                            </div>
                        </div>
                        <div className="property-card">
                            <div className="property-image">
                                <span className="property-badge">New</span>
                            </div>
                            <div className="property-content">
                                <h3 className="property-title">Urban Heights Society</h3>
                                <div className="property-location">
                                    <span>West End, Hillside</span>
                                </div>
                                <div className="property-price">$1,500 - $3,000 / month</div>
                                <div className="property-features">
                                    <span>3-5 BHK</span>
                                    <span>Tennis</span>
                                    <span>Club</span>
                                    <span>Park</span>
                                </div>
                            </div>
                        </div>
                        <div className="property-card">
                            <div className="property-image">
                                <span className="property-badge">Popular</span>
                            </div>
                            <div className="property-content">
                                <h3 className="property-title">Maple Woods Residency</h3>
                                <div className="property-location">
                                    <span>North Side, Green Valley</span>
                                </div>
                                <div className="property-price">$900 - $1,800 / month</div>
                                <div className="property-features">
                                    <span>1-3 BHK</span>
                                    <span>Garden</span>
                                    <span>Cafe</span>
                                    <span>Library</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <div className="container">
                    <h2 className="section-title">What Our Users Say</h2>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-text">"Moving to a MyLiving community was the best decision I made. I found amazing neighbors who share my interests, and the amenities are exactly what I was looking for."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar"></div>
                                <div>
                                    <h4>Sarah Johnson</h4>
                                    <p>Maple Woods Resident</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">"I saved over $2,000 in brokerage fees and found a beautiful apartment in a community that perfectly matches my lifestyle. The process was smooth and transparent."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar"></div>
                                <div>
                                    <h4>Michael Chen</h4>
                                    <p>Urban Heights Resident</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">"The community app makes everything so convenient - from paying maintenance to organizing community events. It's like living in a small town with all modern amenities!"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar"></div>
                                <div>
                                    <h4>Priya Sharma</h4>
                                    <p>Sunset Garden Resident</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Download Section */}
            <section className="app-download">
                <div className="container">
                    <h2>Download the MyLiving App</h2>
                    <p>Find your perfect home, connect with neighbors, and manage your community experience - all from your phone.</p>
                    <div className="app-buttons">
                        <a href="#" className="app-btn">
                            <span>Download on App Store</span>
                        </a>
                        <a href="#" className="app-btn">
                            <span>Get it on Google Play</span>
                        </a>
                    </div>
                </div>
            </section>
         <Footer/>
        </div>
    );
};

export default HomePage;