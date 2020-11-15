import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import './Directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem';


const directory = ({sections}) => (
    <div className="directory-menu">
    {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem 
        key={id} 
       {...otherSectionProps} />
    ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(directory);