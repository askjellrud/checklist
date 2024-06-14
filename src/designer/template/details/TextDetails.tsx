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
        <Flex fullWidth>
            <Form.Control
                type="text"
                placeholder="Default value..."
                value={item.defaultValue}
                onChange={(event) => {
                    item.defaultValue = event.target.value;
                    updateItem(item);
                }}
            />
        </Flex>
    )
}
