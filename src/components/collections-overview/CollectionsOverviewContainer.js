import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import WithSpinner from '../with-spinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

import {
  selectIsCollectionFetching,
} from '../../redux/shop/ShopSelectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;
