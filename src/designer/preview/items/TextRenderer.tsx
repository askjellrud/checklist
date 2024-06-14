import { useState } from "react";
import { TextItem } from "../../template/template";
import { ItemRenderer } from "./ItemRenderer";
import { Form } from "react-bootstrap";
import { Flex } from "../../../common/Flex";

type Props = {
    item: TextItem;
};

export const TextRenderer: React.FC<Props> = ({ item }) => {
    const [value, setValue] = useState('');

    return (
        <ItemRenderer>
            {item.label}
            <Flex paddingLeft16 fullWidth>

                <Form.Control
                    type="text"
                    placeholder="Enter text here..."
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
            </Flex>
        </ItemRenderer>
    )
}
