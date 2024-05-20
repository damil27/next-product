import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}
const UsersTable = async() => {
     const res = await fetch("https://jsonplaceholder.typicode.com/users");
     const user: User[] = await res.json();
  return (
    <div>
      <table className="table table-border">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable