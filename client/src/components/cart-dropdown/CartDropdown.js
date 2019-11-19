import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import {selectCartItems} from '../../redux/cart/CartSelectors';
import {toggleCartHidden} from '../../redux/cart/CartActions';

import './CartDropdown.scss';

class CartDropdown extends React.Component {
  render() {
    const {cartItems, history, dispatch} = this.props;
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {
            cartItems.length
             ? cartItems.map(item => <CartItem key={item.id} item={item} />)
             : <span className="empty-message">Your cart is empty</span>
          }
        </div>
        <CustomButton onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}>
          GO TO CHECKOUT
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
