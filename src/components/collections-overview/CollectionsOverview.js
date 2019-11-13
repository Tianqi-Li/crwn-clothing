import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/CollectionPreview';
import {selectShopCollections} from '../../redux/shop/ShopSelectors';
import './CollectionsOverview.scss';

const CollectionsOverview = ({collections}) => (
  <div className="collections-overview">
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);