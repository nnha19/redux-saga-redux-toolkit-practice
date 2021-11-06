import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../slices/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const getUsersHandler = () => {
    dispatch({ type: "GET_USERS" });
  };

  const renderUsers = users.map((user) => {
    return (
      <div style={{ borderBottom: "1px solid black" }} key={user.id}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.id}</p>
        <button onClick={() => dispatch(removeUser(user.id))}>Delete</button>
      </div>
    );
  });

  return (
    <div>
      <button onClick={getUsersHandler}>Get users</button>
      {!!users.length && renderUsers}
    </div>
  );
};

export default User;
