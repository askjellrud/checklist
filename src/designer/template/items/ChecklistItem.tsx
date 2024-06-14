
import { Dropdown } from 'react-bootstrap';
import { Flex } from '../../../common/Flex';
import React, { ReactNode } from 'react';
import { IconToggle } from '../../../common/IconToggle';

type Props = {
  children: ReactNode;
};



export const ChecklistItem: React.FC<Props> = ({ children }) => {
  return (
    <Flex alignStart style={{ border: "1px solid #eee" }} fullWidth>
      <Flex vertical padding4>
        <Dropdown>
          <Dropdown.Toggle as={IconToggle} />

          <Dropdown.Menu>
            <Dropdown.Item>TODO</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Flex>
      <Flex padding16 fullWidth>
        {children}
      </Flex>
    </Flex>
  )
}
