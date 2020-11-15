import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/CartSelectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

import './CheckoutPage.styles.scss';


const checkoutPage = ({cartItems, total}) => (
    <div className='checkoutPage'>
        <div className='checkoutHeader'>
            <div className='headerBlock'>
                <span>Product</span>
            </div>
            <div className='headerBlock'>
                <span>Description</span>
            </div>
            <div className='headerBlock'>
                <span>Quantity</span>
            </div>
            <div className='headerBlock'>
                <span>Price</span>
            </div>
            <div className='headerBlock'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
<CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>
        <span>TOTAL: ${total}</span>
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(checkoutPage);