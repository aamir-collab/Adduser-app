// outputting user data
import React from "react";
import Card from "../UI/card";
import classes from "./UserList.module.css";
const UserList = function (props) {
  return (
    <Card classname={classes.users}>
      {/* props.users is the array which has the user data */}
      {/* we use map method to convert user array data to jsx code */}
      <ul>
        {props.users.map((user) => (
          // every list item should have unique key value
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
