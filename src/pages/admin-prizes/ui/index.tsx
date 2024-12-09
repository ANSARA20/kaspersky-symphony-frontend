import { useEffect, useState } from 'react';

import { fetchPrizes } from '../api/fetch-prizes';
import { PrizesTableHeader } from '../config/table-header';

import { Spinner } from '@/shared/ui/spinner';
import { Text } from '@/shared/ui/text';
import { useLogout } from '@/features/logout';
import { Table, TableBody } from '@/shared/ui/table';

export const AdminPrizesPage = () => {
  const [error, setError] = useState('');
  const [prizes, setPrizes] = useState<TableBody>();
  const [loading, setLoading] = useState(false);
  const logout = useLogout();

  const getPrizes = async () => {
    setLoading(true);
    const { error: fetchError, prizes: fetchedPrizes, status } = await fetchPrizes();

    setLoading(false);
    if (status === 401) logout();
    setError(fetchError);
    setPrizes(fetchedPrizes);
  };

  useEffect(() => {
    getPrizes();
  }, []);

  if (loading) return <Spinner />;

  if (error) return <Text>{error}</Text>;

  return prizes ? <Table body={prizes} header={PrizesTableHeader} /> : null;
};
