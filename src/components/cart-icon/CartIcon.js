import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/CartActions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

class CartIcon extends React.Component {
  render() {
    return (
      <div className="cart-icon" onClick={this.props.toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
