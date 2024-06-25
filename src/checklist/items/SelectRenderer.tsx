import { Form } from "react-bootstrap";
import { ItemRenderer } from "./ItemRenderer";
import { Flex } from "../../common/Flex";
import { SelectItem, SelectValue } from "../../builder/template/template";
import { cloneDeep } from "lodash";


type Props = {
    item: SelectItem;
    value: SelectValue;
    valueChanged: (value: SelectValue) => void;
};

export const SelectRenderer: React.FC<Props> = ({ item, value, valueChanged }) => {

    const onChange = (option: string, checked: boolean, multivalue: boolean) => {
        const newValue = cloneDeep(value);
        if (multivalue) {
            newValue.selected = checked ?
                [...newValue.selected, option] :
                newValue.selected.filter((item) => item !== option);
        } else {
            newValue.selected = [option];
        }
        valueChanged(newValue);
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
                                checked={value.selected.includes(option)}
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
                                checked={value.selected.includes(option)}
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
                                selected={value.selected.includes(option)}
                                value={index}>{option}
                            </option>
                        ))}
                    </Form.Select>
                }


            </Flex>
        </ItemRenderer>
    )
}
