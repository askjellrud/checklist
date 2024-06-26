import { Form } from "react-bootstrap";
import { ItemRenderer } from "./ItemRenderer";
import { Flex } from "../../common/Flex";
import { SelectItem, SelectData } from "../../builder/template/template";
import { cloneDeep } from "lodash";


type Props = {
    item: SelectItem;
    data: SelectData;
    dataChanged: (data: SelectData) => void;
};

export const SelectRenderer: React.FC<Props> = ({ item, data, dataChanged }) => {

    const onChange = (option: string, checked: boolean, multivalue: boolean) => {
        const newData = cloneDeep(data);
        if (multivalue) {
            newData.values = checked ?
                [...newData.values, option] :
                newData.values.filter((item) => item !== option);
        } else {
            newData.values = [option];
        }
        dataChanged(newData);
    }

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
                                checked={data.values.includes(option)}
                                onChange={(element) => onChange(option, element.target.checked, true)}
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
                                checked={data.values.includes(option)}
                                onChange={() => onChange(option, true, false)}
                            />
                        </Flex>
                    ))
                }

                {item.style === 'dropdown' &&
                    <Form.Select
                        onChange={(event) => onChange(event.target.value, true, false)}
                    >
                        {item.options.map((option, index) => (
                            <option key={index}
                                selected={data.values.includes(option)}
                                value={index}>{option}
                            </option>
                        ))}
                    </Form.Select>
                }


            </Flex>
        </ItemRenderer>
    )
}
