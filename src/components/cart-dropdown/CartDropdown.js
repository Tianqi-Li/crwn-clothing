import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import {selectCartItems} from '../../redux/cart/CartSelectors';

import './CartDropdown.scss';

class CartDropdown extends React.Component {
  render() {
    const {cartItems} = this.props;
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {
            cartItems.map(item => <CartItem key={item.id} item={item} />)
          }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
