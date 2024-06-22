import { useState } from "react";
import { ItemRenderer } from "./ItemRenderer";
import { Form } from "react-bootstrap";
import { TextItem } from "../../builder/template/template";
import { Flex } from "../../common/Flex";

type Props = {
    item: TextItem;
};

export const TextRenderer: React.FC<Props> = ({ item }) => {
    const [value, setValue] = useState(item.defaultValue);
    const [defaultValue, setDefaultValue] = useState(item.defaultValue);

    if (defaultValue != item.defaultValue) {
        setValue(item.defaultValue);
        setDefaultValue(item.defaultValue);
    }

    return (
        <ItemRenderer>
            {item.label}
            <Flex paddingLeft16 fullWidth>

                {!item.isMultiline && <Form.Control
                    type="text"
                    placeholder=""
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />}

                {item.isMultiline && <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder=""
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />}

            </Flex>
        </ItemRenderer>
    )
}
