import './index.scss'
import {Link, NavLink} from "react-router-dom"
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faShoppingBag, faUser} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LogoS} alt="logo"/>
                <img className='sub-logo' src={LogoSubtitle} alt="Sean" />
            </Link>
            <nav>

                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>

                <NavLink
                    activeclassname='active'
                    className='contact-link'
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

            </nav>

            <ul>

                <li>
                    <a target="_blank"
                       rel='noreferrer'
                       href="https://www.instagram.com/sean.garofal">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                    </a>
                </li>

                <li>
                    <a target="_blank"
                       rel='noreferrer'
                       href="https://www.tiktok.com/seanregretsthis"
                    >
                        <FontAwesomeIcon icon={faTiktok} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank"
                       rel='noreferrer'
                       href="https://www.unspilla-bowl.com/">
                        <FontAwesomeIcon icon={faShoppingBag} color="#4d4d4e"/>

                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar
