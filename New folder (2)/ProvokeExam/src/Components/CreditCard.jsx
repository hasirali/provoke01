import React from 'react';
import './CreditCard.css'

const CreditCard = () => {
    return (
        <div className="container">

            <div className="payment-form">
                <h1>Complete Payment</h1>
                <form>
                    <label>
                        Card number
                        <input type="text" name="card-number" />
                    </label>
                    <label>
                        MM/YY
                        <input type="text" name="expiry-date" />
                    </label>
                    <label>
                        CVC
                        <input type="text" name="cvc" />
                    </label>
                    <input type="submit" value="Confirm Payment" />
                </form>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <p>Plan Name: Basic</p>
                    <p>Billing Cycle: Monthly</p>
                    <p>Plan price: ₹2000/mo</p>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
