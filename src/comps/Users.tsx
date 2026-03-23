import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, type FC } from 'react';
import useGetUsers from './useGetUsers';

interface UsersProps {
  onUser: (name: string | null) => void;
}

const Users: FC<UsersProps> = ({ onUser }) => {
  const [users, setUsers] = useState<string[]>([]);

  const { pullUsers } = useGetUsers();

  const getUsers = async () => {
    const data = await pullUsers();
    setUsers(data.map(({ name }) => name));
  };

  const saveUser = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({ name: 'Sam' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div>
      <button onClick={saveUser}>Save User</button>
      <h2>Users</h2>
      {users.map((name) => {
        return (
          <p key={name} onClick={() => onUser(name)}>
            {name}
          </p>
        );
      })}
      <Autocomplete
        fullWidth
        size='small'
        options={users}
        onChange={(_, user) => onUser(user)}
        renderInput={(params) => {
          return <TextField {...params} />;
        }}
      />
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};

export default Users;
