import React from "react";
import { connect } from "react-redux";
import "./shoppage.styles.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  collections: selectCollections(state)
});

export default connect(mapStateToProps, null)(ShopPage);
