import clsx from 'clsx';

import { View } from '../view';

import { TableCell } from './cell';

export type TableBody = Record<string, string | number>[];
interface headerCell {
  title: string | number;
  width?: string;
}

export interface Props {
  header: headerCell[];
  body: TableBody;
  heightClass?: string;
}

export const Table = ({ header, body, heightClass = 'h-[calc(100vh-180px)]' }: Props) => {
  return (
    <View vertical className='gap-0'>
      <View className='rounded-xl bg-default py-2' justify='between'>
        {header.map(({ title, width }) => (
          <TableCell key={title} width={width}>
            {title}
          </TableCell>
        ))}
      </View>
      <View vertical className={clsx('gap-0 overflow-y-scroll', heightClass)}>
        {body.map((row, index) => (
          <View
            key={index}
            className={clsx('rounded-xl py-3', {
              'bg-default bg-opacity-20': index % 2 === 1,
            })}
            justify='between'
          >
            {Object.values(row).map((cell, index) => (
              <TableCell key={cell} width={header[index].width}>
                {cell}
              </TableCell>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
