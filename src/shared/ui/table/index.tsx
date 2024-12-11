import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import { View } from '../view';
import { Text } from '../text';
import { Button } from '../button';

import { TableCell } from './cell';

export type TableBody = Record<string, string | number>[];
export interface HeaderCell {
  title: string | number;
  width?: string;
}

export interface Props {
  header: HeaderCell[];
  body: TableBody;
  heightClass?: string;
  showMore?: boolean;
  addPage?: (value: null | number) => void;
  scrollTop?: null | number;
}

export const Table = ({
  header,
  body,
  heightClass = 'max-h-[calc(100vh-180px)]',
  addPage,
  showMore,
  scrollTop,
}: Props) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const handleAddPage = () => {
    addPage(tableRef.current?.scrollTop);
  };

  useEffect(() => {
    if (scrollTop) {
      tableRef.current.scrollTop = scrollTop;
    }
  }, [body]);

  return (
    <View vertical className='gap-0'>
      <View className='rounded-xl bg-default py-2' justify='between'>
        {header.map(({ title, width }) => (
          <TableCell key={title} width={width}>
            {title}
          </TableCell>
        ))}
      </View>
      <View ref={tableRef} vertical className={clsx('h-full gap-0 overflow-y-scroll', heightClass)}>
        {!body.length && <Text className='mt-4'>Пусто</Text>}
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
        <View centered className='mt-4'>
          {showMore && (
            <View centered>
              <Button onClick={handleAddPage}>Еще</Button>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
