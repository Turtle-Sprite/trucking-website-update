import {AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react'

function NavBurger({hamburgerMenu}) {
    const [menuOpen, setMenuOpen] = useState(false)
    
    
    return ( 
        <div className="nav-container-burger">
            <nav>
                <AiOutlineMenu 
                className='hamburger-icon' 
                onClick={()=> setMenuOpen(prev => !prev)}
                />
                <ul className={`${menuOpen? 'nav-list-burger' : 'hidden'}`}>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Career Center</li>
                    <li>Contact Us</li>
                    <li>
                    <button>Login</button>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default NavBurger;