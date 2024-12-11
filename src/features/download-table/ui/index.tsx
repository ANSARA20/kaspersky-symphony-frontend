import { download } from '../api/download';

import { Button } from '@/shared/ui/button';

interface Props {
  route: string;
}

export const DownloadTable = ({ route }: Props) => {
  return (
    <Button
      className='flex-shrink-0'
      onClick={() => {
        download(route);
      }}
    >
      Скачать таблицу
    </Button>
  );
};
