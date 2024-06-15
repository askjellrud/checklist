import { Form } from "react-bootstrap";
import { Flex } from "../../../common/Flex";
import { SelectItem } from "../../template/template";
import { ItemRenderer } from "./ItemRenderer";


type Props = {
    item: SelectItem;
};

export const SelectRenderer: React.FC<Props> = ({ item }) => {
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
            </Flex>
        </ItemRenderer>
    )
}
