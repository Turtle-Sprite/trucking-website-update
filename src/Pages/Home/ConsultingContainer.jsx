import SalesTalk from "../../images/SalesTalk.jpg";

function ConsultingContainer() {
  return (
    <div className="consulting-container">
      <div className="sales-pitch">
        <h3>If you have supply chain questions, we have answers.</h3>
        <h5>We solve your logistics challenges.</h5>
        <p>
          Take two minutes to fill out our new customer form, and wait for one
          of our representatives to call you back. It\’s that easy.{" "}
        </p>
        <button>Fill Out New Customer Form</button>
      </div>
      <div className="business-meeting-img">
        <img src={SalesTalk} className="img-sales" />
      </div>
    </div>
  );
}

export default ConsultingContainer;
