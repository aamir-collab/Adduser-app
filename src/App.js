import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
//to add the user list in our UI we use a concept known as lifting state up in react
function App() {
  const [userList, setUserList] = useState([]);
  const addUser = function (uName, uAge) {
    setUserList((prevUserList) => {
      console.log(prevUserList);
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUser}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}
export default App;
