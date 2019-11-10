import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/CartActions';
import {selectCartItemsCount} from '../../redux/cart/CartSelectors';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

class CartIcon extends React.Component {
  render() {
    const {toggleCartHidden, itemCount} = this.props;
    return (
      <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
