
import { Dropdown } from 'react-bootstrap';
import { Flex } from '../../../common/Flex';
import React, { ReactNode } from 'react';
import { IconToggle } from '../../../common/IconToggle';
import { TemplateItem } from '../template';
import { useTemplateStore } from '../useTemplateStore';

type Props = {
  children: ReactNode;
  item: TemplateItem;
};



export const ItemRenderer: React.FC<Props> = ({ item, children }) => {
  const { removeItem } = useTemplateStore();

  return (
    <Flex alignStart style={{ border: "1px solid #eee", position: 'relative' }} fullWidth>
      <Flex style={{
        position: 'absolute',
        left: 0,
        top: 0,
        marginTop: '-5px',
        marginLeft: '8px',
        fontSize: "10px",
        color: "#999",
        textTransform: "capitalize",
        backgroundColor: "white",
        paddingLeft: "4px",
        paddingRight: "4px",
        borderLeft: "1px solid #ddd",
        borderRight: "1px solid #ddd",
        height: "10px"
      }}>
        {item.type}
      </Flex>

      <Flex vertical paddingLeft8 paddingTop8>
        <Dropdown>
          <Dropdown.Toggle as={IconToggle}><i style={{ fontSize: "20px", WebkitTextStrokeWidth: "1px", color: "#777" }} className="bi bi-list" /></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => removeItem(item)}>
              <i style={{ color: "red", WebkitTextStrokeWidth: "2px" }} className="bi bi-x" />&nbsp;Remove
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Flex>
      <Flex padding16 gap8 fullWidth>
        {children}
      </Flex>
      <Flex vertical paddingRight8 paddingTop8 paddingBottom4>
        <Dropdown>
          <Dropdown.Toggle as={IconToggle} ><i style={{ fontSize: "14px", WebkitTextStrokeWidth: "0.7px", color: "#999" }} className="bi bi-arrow-down-up" /></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => removeItem(item)}>
              <i style={{ WebkitTextStrokeWidth: "2px" }} className="bi bi-arrow-up" />&nbsp;Move up
            </Dropdown.Item>
            <Dropdown.Item onClick={() => removeItem(item)}>
              <i style={{ WebkitTextStrokeWidth: "2px" }} className="bi bi-arrow-down" />&nbsp;Move down
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Flex>
    </Flex >
  )
}
