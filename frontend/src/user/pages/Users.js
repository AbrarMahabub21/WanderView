import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USER = [
    {
      id: "1",
      name: "Abrar Mahabub",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];
  return (
    <div>
      <UsersList items={USER} />
    </div>
  );
};

export default Users;
