import truckImg from '../../images/Sunset-Semi.jpg'

function HiringContainer() {
    return (
        <div className="hiring-container">
            <div className="trucking-convo">
                <img className='semi-image' src={truckImg}  alt="truck img"/>
            </div>
            <div className="sales-pitch">
                <h3>Now Hiring New Team Members</h3>
                <h5>Icons</h5>
                <p>Ready to work for a great company? </p>
                <button>Apply Today</button>
            </div>

        </div>
    );
}



export default HiringContainer;