import './index.scss'
import { Link, NavLink } from 'react-router-dom'

//Logo 
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>

        {/* for the logo */}

        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img src={LogoSubtitle} className="sub-logo" alt="slobodan"/>
        </Link>
        {/* end for the logo */}
        {/* navigation to the bar */}
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul> 
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/aufaanasin/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/AufaAnasin'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar