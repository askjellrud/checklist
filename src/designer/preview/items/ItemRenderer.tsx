
import React, { ReactNode } from 'react';
import { Flex } from '../../../common/Flex';

type Props = {
  children: ReactNode;
};

export const ItemRenderer: React.FC<Props> = ({ children }) => {
  return (
    <Flex vertical gap8 alignStart padding8 fullWidth>
      {children}
    </Flex >
  )
}
