import React from "react";
import { connect } from "react-redux";
import "./collectionpage.styles.scss";

import { selectColletion } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectColletion(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);
