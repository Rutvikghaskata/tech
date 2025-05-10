import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="section-footer">
            <div className="footer-container container">
                <div className="content_1">
                    <img src="./src/assets/lion.jpg" alt="lion" />
                    <p>
                        Welcome to volker eComstore, your ultimate destination for cutting-edge Gadgest!
                    </p>
                </div>
                <div className="content_2">
                    <h4>SHOPPING</h4>
                    <NavLink to="#">Computer Store</NavLink>
                    <NavLink to="#">Laptop Store</NavLink>
                    <NavLink to="#">Accessories</NavLink>
                    <NavLink to="#">Sales & Discount</NavLink>
                </div>
                <div className="content_3">
                    <h4>Experience</h4>
                    <NavLink to="contact.html">Contact us</NavLink>
                    <NavLink to="" target="_blank">Payment Method</NavLink>
                    <NavLink to="" target="_blank">Delivery</NavLink>
                    <NavLink to="" target="_blank">Return & Exchange</NavLink>
                </div>
                <div className="content_4">
                    <h4>NEWSLETTER</h4>
                    <p>Be the fisrt to know about new<br/>arrivals, sales & promos!</p>
                    <div className="f-mail">
                        <input type="email" placeholder="Enter your email"/>
                            <i className="bx bx-envelope"></i>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="f-design">
                <div className="f-design-txt">
                    <p>Design and code by Volker here</p>
                </div>
            </div>
        </footer>
    )
};