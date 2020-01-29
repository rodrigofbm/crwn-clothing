import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory.selectors";
import { DirectoryContainer } from "./directory.styles";

const DirectoryComponent = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = state => ({
  sections: selectSections(state)
});

export default connect(mapStateToProps, null)(DirectoryComponent);
