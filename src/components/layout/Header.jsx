import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className="section-navbar">
            <section className="top_txt">
                <div className="head container">
                    <div className="head_txt">
                        <p>Free shipping, 30 day return or refund guarantee</p>
                    </div>
                    <div className="sign_in_up">
                        <NavLink to="#">SIGN IN</NavLink>
                        <NavLink to="#">SIGN UP</NavLink>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="navbar-brand">
                    <NavLink to="index">
                        <img src="./src/assets/images/Logo.jpg" alt="logo" style={{borderRadius: "4px"}}/>
                    </NavLink>
                </div>
                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="About" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="Movie" className="nav-link">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="Contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}