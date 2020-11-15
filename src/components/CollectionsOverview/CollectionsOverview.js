import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './CollectionsOverview.styles.scss';

const collectionsOverwiev = ({collections}) => (
<div className='collectionsOverview'>
{collections.map(({id, ...otherCollectionProps}) => (
    <CollectionPreview key={id} {...otherCollectionProps} />))}
</div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(collectionsOverwiev);