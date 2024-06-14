
import { Flex } from '../../../common/Flex';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const ChecklistItem: React.FC<Props> = ({ children }) => {
  return (
    <Flex vertical style={{ border: "1px solid #eee" }} padding32 fullWidth>
      {children}
    </Flex>
  )
}
