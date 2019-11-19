import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionPage from './CollectionPage';

import {
  selectIsCollectionsLoaded,
} from '../../redux/shop/ShopSelectors';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;
