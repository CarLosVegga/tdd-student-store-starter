import "./Footer.css"

export default function Footer() {
    return(
        <div id="footerGrid">
            <div className="footerCard" key="footerCategories">
                <h2>Categories</h2>
                <p>All Categories</p>
                <p>Clothing</p>
                <p>Food</p>
                <p>Accesories</p>
                <p>Tech</p>
            </div>
            <div className="footerCard" key="footerCompany">
                <h2>Company</h2>
                <p>About Us</p>
                <p>Find a Store</p>
                <p>Terms</p>
                <p>Sitemap</p>
                <p>Careers</p>
            </div>
            <div className="footerCard" key="footerSupport">
                <h2>Support</h2>
                <p>Contact Us</p>
                <p>Money Refund</p>
                <p>Order Status</p>
                <p>Shipping Info</p>
                <p>Open Dispute</p>
            </div>
            <div className="footerCard" key="footerAccount">
                <h2>Account</h2>
                <p>Login</p>
                <p>Register</p>
                <p>Account Setting</p>
                <p>My order</p>
            </div>
            <div className="footerCard" key="footerSocials">
                <h2>Socials</h2>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
                <p>YouTube</p>
            </div>
        </div>
    )
}