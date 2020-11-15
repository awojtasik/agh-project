import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/CartAction';
import {selectCartItemsCount} from '../../redux/cart/CartSelectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';

const cartIcon = ({ toggleCartHidden, itemCount }) => (
<div className='cartIcon' onClick={toggleCartHidden}>
<ShoppingIcon className='shoppingIcon' />
<span className='itemCount'>{itemCount}</span>
</div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);