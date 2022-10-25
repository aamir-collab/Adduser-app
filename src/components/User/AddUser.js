import React, { useState } from "react";
import Card from "../UI/card";
import classes from "./AddUser.module.css";
import Button from "../UI/button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = function (props) {
  //to collect input from form we use state
  const [enteredUsername, setUsername] = useState("");
  const [enteredUserage, setUserage] = useState("");
  const [Error, setError] = useState();
  const addUserHandler = function (event) {
    event.preventDefault();
    //reset form after hitting add user button
    if (
      enteredUserage.trim().length === 0 ||
      enteredUsername.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid input (non-empty values)",
      });
      return;
    }
    if (+enteredUserage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredUserage);
    setUserage("");
    setUsername("");
  };
  const userNameChangeHandler = function (event) {
    setUsername(event.target.value);
  };
  const userAgeChangeHandler = function (event) {
    setUserage(event.target.value);
  };
  // on clicking the button or backdrop remove the modal
  // we do that by setting the object to null
  const setErrorHandler = function () {
    setError(null);
  };
  return (
    <div>
      {/* dynamiclly show the error modal if there is an error . We use states for this*/}
      {Error && (
        <ErrorModal
          title={Error.title}
          message={Error.message}
          onConfirm={setErrorHandler}
        ></ErrorModal>
      )}
      <Card>
        <form className={classes.input} onSubmit={addUserHandler}>
          <label className="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameChangeHandler}
          ></input>
          <label className="age">Age (in years)</label>
          <input
            id="age"
            type="number"
            //update input field
            value={enteredUserage}
            onChange={userAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
