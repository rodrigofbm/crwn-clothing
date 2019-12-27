import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectColletionForPreview } from "../../redux/shop/shop.selectors";
import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverviewComponent = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = state => ({
  collections: selectColletionForPreview(state)
});

export default connect(mapStateToProps, null)(CollectionsOverviewComponent);
