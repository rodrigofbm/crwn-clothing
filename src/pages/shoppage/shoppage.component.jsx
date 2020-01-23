import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  transformCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionsOverViewComponent from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collectionpage.component";

class ShopPage extends React.Component {
  state = {};
  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshop = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = transformCollectionsSnapshotToMap(snapshot);

      this.props.updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.path}/`}
          component={CollectionsOverViewComponent}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
