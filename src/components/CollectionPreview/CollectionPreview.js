import React from 'react';
import './CollectionPreview.styles.scss';

import CollectionItem from '../CollectionItem/CollectionItem';


const collectionPreview = ({title, items}) => (
<div className="collectionPreview">
<h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
        {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
        <CollectionItem key={item.id} item={item} />))}
    </div>
</div>
);
export default collectionPreview;