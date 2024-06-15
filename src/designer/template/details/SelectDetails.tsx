import { SelectItem, SelectItemStyle } from "../../template/template";
import { Form } from "react-bootstrap";
import { Flex } from "../../../common/Flex";
import { useTemplateStore } from "../useTemplateStore";

type Props = {
    item: SelectItem;
};

export const SelectDetails: React.FC<Props> = ({ item }) => {
    const { updateItem } = useTemplateStore();

    return (
        <Flex vertical fullWidth gap8>
            <Flex style={{ color: "#666" }} fullWidth gap8>
                Select type
                <Flex>
                    <Form.Select
                        style={{ color: "#666" }}
                        onChange={(event) => {
                            updateItem({ ...item, style: event.target.value as SelectItemStyle });
                        }}>
                        <option selected={item.style === "checkbox"} value="checkbox">Checkbox</option>
                        <option selected={item.style === "radio"} value="radio">Radio</option>
                        <option selected={item.style === "dropdown"} value="dropdown">Dropdown</option>
                    </Form.Select>
                </Flex>
            </Flex>
        </Flex >
    )
}
