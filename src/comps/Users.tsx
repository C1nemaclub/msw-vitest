import { useState, type FC } from 'react';

interface UserResponse {
  name: string;
}
interface UsersProps {
  onUser: (name: string) => void;
}

const Users: FC<UsersProps> = ({ onUser }) => {
  const [users, setUsers] = useState<string[]>([]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = (await response.json()) as UserResponse[];
    setUsers(data.map(({ name }) => name));
  };

  return (
    <div>
      <h2>Users</h2>
      {users.map((name) => {
        return (
          <p key={name} onClick={() => onUser(name)}>
            {name}
          </p>
        );
      })}
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};

export default Users;
