import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-layout">
        <div className="footer-col1">
            <h2>About</h2> 
            <Link to="#"><h4>Contact</h4></Link>
            <Link to="#"><h4>Careers</h4></Link>
            <Link to="#"><h4>FAQ</h4></Link>
        </div>
        <div className="footer-col2">
          <h2>Services </h2>
          <Link to="#"><h4>Supply Chain Management</h4></Link>
          <Link to="#"><h4>Ground Less-than-truckload</h4></Link>
          <Link to="#"><h4>Truckload</h4></Link>
        </div>
        <div className="footer-col3">
          <div className="company-address">
            <p>Trucking123 Corporate Office: </p>
            <p>15 27th Street Pittsburgh, PA 15222</p>
            <p>(800) 366-7488</p>
          </div>
          <div className="company-social-icons">
            
          </div>
          <div className="copy-right">
            <p>2023 Trucking123, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
