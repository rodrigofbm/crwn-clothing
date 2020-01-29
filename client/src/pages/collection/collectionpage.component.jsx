import React from "react";
import { connect } from "react-redux";

import { CollectionContainer, Items, Title } from "./collectionpage.styles";
import { selectColletion } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItem key={item.name} item={item} />
        ))}
      </Items>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectColletion(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);
