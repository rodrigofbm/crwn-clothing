import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  Preview
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle
      onClick={() => history.push(`${match.path}${routeName}`)}
    >
      {title}
    </CollectionPreviewTitle>
    <Preview>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
