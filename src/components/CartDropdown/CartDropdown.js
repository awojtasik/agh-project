import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import {selectCartItems} from '../../redux/cart/CartSelectors';
import {toggleCartHidden} from '../../redux/cart/CartAction';

import './CartDropdown.styles.scss';


const cartDropdown = ({cartItems, history, dispatch}) => (
<div className='cartDropdown'>
<div className='cartItems'>
    {cartItems.length ? (
        cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />))
    ) : (
<span className='emptyMessage'>Your cart is empty</span>
    )}
</div>
<CustomButton 
onClick={() => {
history.push('/checkout');
dispatch(toggleCartHidden());
}}>GO TO CHECKOUT</CustomButton>
</div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });

export default withRouter(connect(mapStateToProps)(cartDropdown));


