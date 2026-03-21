import { useQueryClient } from '@tanstack/react-query';

const useGetUsers = () => {
  const queryClient = useQueryClient();

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = (await response.json()) as { name: string }[];
    return data;
  };

  const pullUsers = async () => {
    return queryClient.fetchQuery({
      queryKey: ['users'],
      queryFn: fetchUsers,
    });
  };

  return { pullUsers };
};

export default useGetUsers;
