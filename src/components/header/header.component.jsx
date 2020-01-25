import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIconComponent from "../cart-icon/cart-icon.component";
import CartDropdownComponent from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  Options
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <Options as={Link} to="/shop">
        SHOP
      </Options>
      <Options as={Link} to="/shop">
        CONTACT
      </Options>
      {currentUser ? (
        <Options onClick={signOutStart}>SIGN OUT</Options>
      ) : (
        <Options as={Link} to="/signin">
          SIGN IN
        </Options>
      )}
      <CartIconComponent />
    </OptionsContainer>
    {!hidden && <CartDropdownComponent />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
