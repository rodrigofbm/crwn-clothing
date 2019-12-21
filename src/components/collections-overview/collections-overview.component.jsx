import React from "react";
import "./collections-overview.styles.scss";

import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectColletionForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverviewComponent = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  collections: selectColletionForPreview(state)
});

export default connect(mapStateToProps, null)(CollectionsOverviewComponent);
