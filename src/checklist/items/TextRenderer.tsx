import { ItemRenderer } from "./ItemRenderer";
import { Form } from "react-bootstrap";
import { TextItem, TextData } from "../../builder/template/template";
import { Flex } from "../../common/Flex";

type Props = {
    item: TextItem;
    data: TextData;
    dataChanged: (data: TextData) => void;
};

export const TextRenderer: React.FC<Props> = ({ item, data, dataChanged }) => {
    return (
        <ItemRenderer>
            {item.label}
            <Flex paddingLeft16 fullWidth>

                {!item.isMultiline && <Form.Control
                    type="text"
                    placeholder=""
                    value={data.value}
                    onChange={(event) => {
                        dataChanged({ ...data, value: event.target.value })
                    }}
                />}

                {item.isMultiline && <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder=""
                    value={data.value}
                    onChange={(event) => dataChanged({ ...data, value: event.target.value })}
                />}

            </Flex>
        </ItemRenderer>
    )
}
