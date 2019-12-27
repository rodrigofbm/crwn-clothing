import styled, { css } from "styled-components";

const infosWidth = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemImage = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemPrice = styled.span`
  ${infosWidth}
`;

export const CheckoutItemQuantity = styled.span`
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }

  ${infosWidth}
`;

export const CheckoutItemName = styled.span`
  ${infosWidth}
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
