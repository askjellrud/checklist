import { TextItem } from "../../template/template";
import { Form } from "react-bootstrap";
import { Flex } from "../../../common/Flex";
import { useTemplateStore } from "../useTemplateStore";

type Props = {
    item: TextItem;
};

export const TextDetails: React.FC<Props> = ({ item }) => {
    const { updateItem } = useTemplateStore();

    return (
        <Flex vertical fullWidth gap8>
            <Flex fullWidth gap8>
                <Flex style={{ whiteSpace: "nowrap", color: "#666" }}>
                    Default value
                </Flex>
                <Form.Control
                    type="text"
                    placeholder=""
                    value={item.defaultValue}
                    onChange={(event) => {
                        item.defaultValue = event.target.value;
                        updateItem(item);
                    }}
                />
            </Flex>
            <Flex>
                <Form.Check
                    style={{ color: "#666" }}
                    type="checkbox"
                    label="Multiline"
                    checked={item.isMultiline}
                    onChange={(event) => {
                        item.isMultiline = event.target.checked;
                        updateItem(item);
                    }}
                />
            </Flex>
        </Flex>
    )
}
