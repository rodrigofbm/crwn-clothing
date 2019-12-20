import React from "react";
import { connect } from "react-redux";

import "./directory.styles.scss";
import { selectSections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

const DirectoryComponent = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  sections: selectSections(state)
});

export default connect(mapStateToProps, null)(DirectoryComponent);
