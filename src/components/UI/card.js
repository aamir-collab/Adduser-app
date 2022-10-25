import React from "react";
import classes from "./card.module.css";

// props.childrem refers to the form
//the form is inside the card
//props.children ***** from geekys shows
// <whatever is between <card></card> in add user can be accessed using props.children
// we need to style form inside card thats why we use props.children to access the form
// props.children-form
//classes.card - .card from css
const Card = function (props) {
  //activate classname of cards and the classname of the props
  return (
    <div className={`${props.className} ${classes.card}`}>{props.children}</div>
  );
};
export default Card;
