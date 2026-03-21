import { useState, type FC } from 'react';
import useGetUsers from './useGetUsers';

interface UsersProps {
  onUser: (name: string) => void;
}

const Users: FC<UsersProps> = ({ onUser }) => {
  const [users, setUsers] = useState<string[]>([]);

  const { pullUsers } = useGetUsers();

  const getUsers = async () => {
    const data = await pullUsers();
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
