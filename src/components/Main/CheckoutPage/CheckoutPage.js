import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentCart } from './PaymentCart';
import Navbar from '../../Shared/Navbar/Navbar';

const stripePromise = loadStripe('pk_test_51IhRtHEhcJYUvIMrjiMQWyEhbIQ7BYGn3yQo6dr2aTm8DKJw7UkynlnP9bbGxOOtevThEDMKL0T2hyHKb3RGPQSl00q3VPTzXP');

const CheckoutPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5 py-5">
                    <div className="col-md-6 mx-auto shadow-sm pt-5">
                        <Elements stripe={stripePromise}>
                            <PaymentCart />
                        </Elements>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;