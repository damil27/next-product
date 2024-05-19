import React from "react";


interface User{
  id: number;
  name: string;
}
const UserPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const user: User[] = await res.json()

  return <div>
    <h1>User Details here</h1>
    <ul>
      {user.map(u => <li key={u.id}>{ u.name}</li>)}
    </ul>
  </div>;
};

export default UserPage;
