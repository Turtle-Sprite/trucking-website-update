function ShippingEstimate() {
    return ( 
    <div>
    <h4 className="card-title">Estimate Delivery Time</h4>
    <div className="flex">
        <div className="estimate-form">
            <label for="OriginPoint">Origin Point</label>
            <input type="text"
                placeholder="Origin"
            />
            <label for="DestinationPoint">Destination Point</label>
            <input type="text"
                placeholder="Destination"
            />
        </div>
        <div className="estimate-btn">
            <button>Estimate</button>
            <p>Or <a href="#">Login</a> for a rate quote.</p>
        </div>
    </div>
    </div>
    );
}

export default ShippingEstimate;