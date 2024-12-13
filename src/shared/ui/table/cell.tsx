import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Text } from '../text';

interface Props extends PropsWithChildren {
  width?: string;
}

export const TableCell = ({ children, width = 'w-full' }: Props) => {
  return <Text className={clsx('w-full pl-4', width)}>{children}</Text>;
};
