
import { Dropdown } from 'react-bootstrap';
import { Flex } from '../../common/Flex';
import React, { ReactNode, useState } from 'react';
import { IconToggle } from '../../common/IconToggle';
import { TemplateItem } from './template';
import { useTemplateStore } from './useTemplateStore';
import { randomId } from '../../common/string';
import { Details } from './details/Details';

type Props = {
  children: ReactNode;
  item: TemplateItem;
};



export const ItemRenderer: React.FC<Props> = ({ item, children }) => {
  const { removeItem, addItemAfter } = useTemplateStore();
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Flex maxHeight100 alignStart style={{ border: "1px solid #eee", position: 'relative' }} fullWidth>

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

      <Flex vertical fullHeight fullWidth>
        <Flex fullWidth fullHeight alignStart>
          <Flex padding16 gap8 fullWidth>
            {children}
          </Flex>
          <Flex vertical fullHeight spaceBetween paddingRight8 paddingTop8 paddingBottom4>
            <Dropdown>
              <Dropdown.Toggle as={IconToggle}><i style={{ fontSize: "20px", WebkitTextStrokeWidth: "1px", color: "#777" }} className="bi bi-plus" /></Dropdown.Toggle>
              <Dropdown.Menu>

                <Dropdown.Item onClick={() => addItemAfter(item, { id: randomId(), type: 'label', label: "" })}>
                  <i style={{ color: "#28A745", WebkitTextStrokeWidth: "2px" }} className="bi bi-plus" />&nbsp;Label
                </Dropdown.Item>
                <Dropdown.Item onClick={() => addItemAfter(item, { id: randomId(), type: 'text', label: "", isMultiline: false, defaultValue: "" })}>
                  <i style={{ color: "#28A745", WebkitTextStrokeWidth: "2px" }} className="bi bi-plus" />&nbsp;Text
                </Dropdown.Item>
                <Dropdown.Item onClick={() => addItemAfter(item, { id: randomId(), type: 'select', label: "", options: [""], style: 'checkbox' })}>
                  <i style={{ color: "#28A745", WebkitTextStrokeWidth: "2px" }} className="bi bi-plus" />&nbsp;Select
                </Dropdown.Item>

                {item.type !== 'title' &&
                  <>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => removeItem(item)}>
                      <i style={{ color: "#FF4B4B", WebkitTextStrokeWidth: "2px" }} className="bi bi-x" />&nbsp;Remove
                    </Dropdown.Item>
                  </>
                }



              </Dropdown.Menu>
            </Dropdown>

            {item.type !== 'title' &&
              <Flex>
                <i onClick={() => setShowDetails(!showDetails)} style={{ fontSize: "20px", WebkitTextStrokeWidth: "1px", color: "#777", cursor: "pointer" }} className="bi bi-three-dots" />
              </Flex>
            }
          </Flex>
        </Flex>
        {showDetails && <Details item={item}></Details>}
      </Flex>
    </Flex >
  )
}
