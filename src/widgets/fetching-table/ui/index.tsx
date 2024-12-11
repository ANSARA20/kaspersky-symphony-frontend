import { useEffect, useRef, useState } from 'react';

import { useLogout } from '@/features/logout';
import { HeaderCell, Table, TableBody } from '@/shared/ui/table';
import { Spinner } from '@/shared/ui/spinner';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { Button } from '@/shared/ui/button';

interface Props {
  fetchFunc: (value: Record<string, number | string>) => any;
  header: HeaderCell[];
  placeholder: string;
  startContent?: React.ReactNode;
}

export const FetchingTableWithSearch = ({
  fetchFunc,
  header,
  placeholder,
  startContent,
}: Props) => {
  const [items, setItems] = useState<TableBody>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastFetched, setLastFetched] = useState(60);
  const [page, setPage] = useState<number>();
  const [search, setSearch] = useState('');
  const timeout = useRef(null);
  const [scrollTop, setScrollTop] = useState<null | number>(null);
  const logout = useLogout();

  const getItems = async (search?: string, page?: number) => {
    setLoading(true);
    const { error: fetchError, items: fetchedItems, status } = await fetchFunc({ search, page });

    setLoading(false);
    if (status === 401) logout();
    setError(fetchError);
    setLastFetched(fetchedItems.length);
    if (page > 1) {
      setItems([...items, ...fetchedItems]);
    } else {
      setItems(fetchedItems);
    }
  };

  const debounceSearch = async () => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      getItems(search);
    }, 1500);
  };

  useEffect(() => {
    debounceSearch();
    setScrollTop(null);

    return () => clearTimeout(timeout.current);
  }, [search]);

  useEffect(() => {
    getItems(search, page);
    clearTimeout(timeout.current);
  }, [page]);

  const handleReset = () => {
    setSearch('');
    setTimeout(() => {
      clearTimeout(timeout.current);
    }, 0);
    setPage(1);
    setScrollTop(null);
    getItems();
  };

  const handleAddPage = (scroll: null | number) => {
    setScrollTop(scroll);
    setPage((prev) => (prev ? (prev += 1) : 2));
  };

  if (loading)
    return (
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Spinner />
      </div>
    );

  if (error) return <Text>{error}</Text>;

  return items ? (
    <View vertical>
      <View className='gap-2'>
        {startContent}
        <input
          className='w-full rounded-xl bg-default px-4 py-2'
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button color='danger' onClick={handleReset}>
          Сброс
        </Button>
      </View>

      <Table
        addPage={handleAddPage}
        body={items}
        header={header}
        heightClass='max-h-[calc(100vh-220px)]'
        scrollTop={scrollTop}
        showMore={lastFetched >= 60}
      />
    </View>
  ) : null;
};
