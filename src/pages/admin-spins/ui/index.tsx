import { fetchSpins } from '../api/fetch-spins';
import { SpinsTableHeader } from '../config/table-header';

import { DownloadTable } from '@/features/download-table';
import { FetchingTableWithSearch } from '@/widgets/fetching-table';

export const AdminSpinsPage = () => {
  return (
    <FetchingTableWithSearch
      fetchFunc={fetchSpins}
      header={SpinsTableHeader}
      placeholder='Введите id пользователя'
      startContent={<DownloadTable route='spins' />}
    />
  );
};
