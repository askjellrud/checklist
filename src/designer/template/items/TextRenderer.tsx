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
    <ItemRenderer item={item}>
      <Form.Control
        type="text"
        placeholder="Label"
        value={item.label}
        onChange={(event) => {
          item.label = event.target.value;
          updateItem(item);
        }}
      />
    </ItemRenderer>
  )
}
