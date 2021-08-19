import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./style.css";
function BuyNowButton() {
  return (
    <div className="buyNowButton">
      <ShoppingCartIcon className="buyIcon" />
    </div>
  );
}

export default BuyNowButton;
