import React from "react";
import { Route } from "react-router-dom";
import "./shoppage.styles.scss";

import CollectionsOverViewComponent from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collectionpage.component";

const ShopPage = ({ match }) => (
  <div>
    <Route
      exact
      path={`${match.path}/`}
      component={CollectionsOverViewComponent}
    />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
