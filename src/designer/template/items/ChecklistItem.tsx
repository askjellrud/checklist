
import { Dropdown } from 'react-bootstrap';
import { Flex } from '../../../common/Flex';
import React, { ReactNode } from 'react';
import { IconToggle } from '../../../common/IconToggle';

type Props = {
  children: ReactNode;
};



export const ChecklistItem: React.FC<Props> = ({ children }) => {
  return (
    <Flex style={{ border: "1px solid #eee" }} fullWidth>
      <Flex vertical>
        <Dropdown>
          <Dropdown.Toggle as={IconToggle} />

          <Dropdown.Menu>
            <Dropdown.Item>TODO</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Flex>
      <Flex padding32>
        {children}
      </Flex>
    </Flex>
  )
}
