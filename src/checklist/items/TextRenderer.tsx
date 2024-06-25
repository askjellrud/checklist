import { ItemRenderer } from "./ItemRenderer";
import { Form } from "react-bootstrap";
import { TextItem, TextValue } from "../../builder/template/template";
import { Flex } from "../../common/Flex";

type Props = {
    item: TextItem;
    value: TextValue;
    valueChanged: (value: TextValue) => void;
};

export const TextRenderer: React.FC<Props> = ({ item, value, valueChanged }) => {
    return (
        <ItemRenderer>
            {item.label}
            <Flex paddingLeft16 fullWidth>

                {!item.isMultiline && <Form.Control
                    type="text"
                    placeholder=""
                    value={value.text}
                    onChange={(event) => {
                        valueChanged({ ...value, text: event.target.value })
                    }}
                />}

                {item.isMultiline && <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder=""
                    value={value.text}
                    onChange={(event) => valueChanged({ ...value, text: event.target.value })}
                />}

            </Flex>
        </ItemRenderer>
    )
}
