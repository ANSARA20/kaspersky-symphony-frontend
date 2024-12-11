import { fetchUsers } from '../api/fetch-users';
import { UsersTableHeader } from '../config/table-header';

import { DownloadTable } from '@/features/download-table';
import { FetchingTableWithSearch } from '@/widgets/fetching-table';

export const AdminUsersPage = () => {
  return (
    <FetchingTableWithSearch
      fetchFunc={fetchUsers}
      header={UsersTableHeader}
      placeholder='Введите номер телефона, почту, имя или id'
      startContent={<DownloadTable route='users' />}
    />
  );
};
