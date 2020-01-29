import { connect } from "react-redux";
import { compose } from "redux";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";
import { selectIsCollectionFething } from "../../redux/shop/shop.selectors";

const mapStateToProps = state => ({
  isLoading: selectIsCollectionFething(state)
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
