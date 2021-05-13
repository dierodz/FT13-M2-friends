import React from "react";
import { Link } from "react-router-dom";

function UserItem({name, email, to}) {
  return (
    <li>
      <Link to={to}>
        <span>{name}</span>
      </Link>
      <span>{email}</span>
    </li>
  );
}

export default UserItem;
