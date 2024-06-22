import { Form } from "react-bootstrap";
import { ItemRenderer } from "./ItemRenderer";
import { useState } from "react";
import { Flex } from "../../common/Flex";
import { SelectItem } from "../../builder/template/template";


type Props = {
    item: SelectItem;
};

export const SelectRenderer: React.FC<Props> = ({ item }) => {
    const [selected, setSelected] = useState('');

    return (
        <ItemRenderer>
            <Flex fullWidth>
                {item.label}
            </Flex>
            <Flex vertical fullWidth paddingLeft16>

                {item.style === 'checkbox' &&
                    item.options.map((option, index) => (
                        <Flex key={index}>
                            <Form.Check
                                type="checkbox"
                                label={option}
                            />
                        </Flex>
                    ))
                }

                {item.style === 'radio' &&
                    item.options.map((option, index) => (
                        <Flex key={index}>
                            <Form.Check
                                name="select-type"
                                type="radio"
                                label={option}
                            />
                        </Flex>
                    ))
                }

                {item.style === 'dropdown' &&
                    <Form.Select
                        onChange={(event) => setSelected(event.target.value)}
                    >
                        {item.options.map((option, index) => (
                            <option key={index} selected={selected === option} value={index}>{option}</option>
                        ))}
                    </Form.Select>
                }


            </Flex>
        </ItemRenderer>
    )
}
