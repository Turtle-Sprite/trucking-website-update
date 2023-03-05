import logo from '../../images/PittOhioLogo.png'

function NavHome({hamburgerMenu}) {
    return ( 
        <div className='nav-container'>
        <div className='logo-nav'>
            <img className="logo-nav-img" src={logo} alt="PittOhio logo" />
        </div>
        <div>
            <nav>
                <ul className='nav-list'>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Career Center</li>
                    <li>Contact Us</li>
                    <li><button>Login</button></li>
                </ul>
            </nav>
        </div>
    </div>
     );
}

export default NavHome;