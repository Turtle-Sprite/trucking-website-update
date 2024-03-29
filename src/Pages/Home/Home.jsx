import Footer from '../../Partials/Footer'
import './Home.css'
import heroImg from '../../images/Semi-Mountains.jpg'
import NavHome from './NavHome';
import {FiMap, FiFlag} from 'react-icons/fi'
import FastTruck from '../../Components/FastTruck'
import {useState, useEffect} from 'react'
import NavBurger from './NavBurger';
import TrackShipment from './TrackShipment';
import ShippingEstimate from './ShippingEstimate';
import ConsultingContainer from './ConsultingContainer'
import HiringContainer from './HiringContainer';

function Home() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)


    return (
        <>
            <div className='home-container'>
                {/* Make a div wrapper for image */}
                <div className='img-wrapper'>
                    <img className="semi-image" src={heroImg} alt='Semi-truck driving through mountains'/>
                    {/* Make a Home only Nav & Burger menu */}
                    {/* false is regular menu */}
                    {/* true sets Navburger component */}
                    <NavHome />
                    <NavBurger />
                </div>
                <div className="company-container">
                    <div className='tag-lines'>
                        <h3 id="prof-cons">Professional Consulting</h3>
                        <h3 id="delivery">Reliable, Fast Delivery</h3>
                        <h3 id="years">40+ Years of Service</h3>
                    </div>
                    <div className="icon-container">
                        <FiMap/>
                        <FastTruck />
                        <FiFlag/>
                    </div>
                    <div className="shipping-tracking-container">
                        <div className='card track-shipping'>
                            <TrackShipment />
                        </div>
                        <div className='card shipping-estimate'>
                            <ShippingEstimate />
                        </div>
                    </div>
                </div>
                <div>
                    <ConsultingContainer />
                </div>
                <div>
                    <HiringContainer />
                </div>
            </div>

        </>
    );
}



export default Home;