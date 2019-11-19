import React from 'react';
import MenuItem from '../menu-items/MenuItem';

import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/DirectorySelectors';
import {createStructuredSelector} from 'reselect';

import './Directory.scss';

class Directory extends React.Component {
  render() {
    const sections = this.props.sections.map(({id, ...otherSectionProps}) => (
      <MenuItem key={id} {...otherSectionProps} />
    ));

    return (
      <div className="directory-menu">
        {sections}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
