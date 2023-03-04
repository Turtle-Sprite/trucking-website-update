import logo from '../images/PittOhioLogo.png'
import {AiOutlineMenu} from 'react-icons/ai'

function NavBurger({hamburgerMenu}) {
    return ( 
        <div className="nav-container-burger">
            <nav>
                <AiOutlineMenu className='hamburger-icon' />
                <ul className='nav-list-burger'>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Career Center</li>
                    <li>Contact Us</li>
                    <button>Login</button>
                </ul>
            </nav>
        </div>
     );
}

export default NavBurger;