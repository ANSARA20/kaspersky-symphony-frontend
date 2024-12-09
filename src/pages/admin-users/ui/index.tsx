import { useEffect, useState } from 'react';

import { fetchUsers } from '../api/fetch-users';
import { UsersTableHeader } from '../config/table-header';

import { TableBody } from '@/shared/ui/table';
import { useLogout } from '@/features/logout';
import { Spinner } from '@/shared/ui/spinner';
import { Table } from '@/shared/ui/table';
import { Text } from '@/shared/ui/text';

export const AdminUsersPage = () => {
  const [error, setError] = useState('');
  const [users, setUsers] = useState<TableBody>();
  const [loading, setLoading] = useState(false);
  const logout = useLogout();

  const getPrizes = async () => {
    setLoading(true);
    const { error: fetchError, users: fetchedUsers, status } = await fetchUsers();

    setLoading(false);
    if (status === 401) logout();
    setError(fetchError);
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    getPrizes();
  }, []);

  if (loading) return <Spinner />;

  if (error) return <Text>{error}</Text>;

  return users ? <Table body={users} header={UsersTableHeader} /> : null;
};
