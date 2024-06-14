import { Form } from "react-bootstrap";
import { Flex } from "../../../common/Flex";
import { TextItem } from "../template";
import { ItemRenderer } from "./ItemRenderer";
import { useTemplateStore } from "../useTemplateStore";

type Props = {
  item: TextItem;
};

export const TextRenderer: React.FC<Props> = ({ item }) => {
  const { updateItem } = useTemplateStore();

  return (
    <ItemRenderer>
      <Flex paddingRight16>{item.label}</Flex>
      <Form.Control
        type="text"
        placeholder="Checklist name"
        value={item.defaultValue}
        onChange={(event) => {
          item.defaultValue = event.target.value;
          updateItem(item);
        }}
      />
    </ItemRenderer>
  )
}
