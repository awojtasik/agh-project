import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
const priceForStripe = price * 100;
const publishableKey = 'pk_test_51HNM1ZLXHTZwIKkMQDFjPB7SY0rX4WGYWOyUEpD3aWM1eczmcB5d7VSIfGQpYAobGEBFzD3tZJ4KfNjOzcToHoP400dG1HF6gW';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

return (
    <StripeCheckout
    label='Pay Now'
    name='AW Shop Ltd.'
    billingAddress
    shippingAddress
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey} />
)
};
export default StripeCheckoutButton;