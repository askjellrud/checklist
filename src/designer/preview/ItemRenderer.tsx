
import React, { ReactNode } from 'react';
import { Flex } from '../../common/Flex';

type Props = {
  children: ReactNode;
};

export const ItemRenderer: React.FC<Props> = ({ children }) => {
  return (
    <Flex alignStart padding8 fullWidth>
      {children}
    </Flex >
  )
}
