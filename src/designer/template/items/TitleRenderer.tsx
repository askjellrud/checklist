import { Form } from "react-bootstrap";
import { LabelItem } from "../template";
import { ItemRenderer } from "../ItemRenderer";
import { useTemplateStore } from "../useTemplateStore";

type Props = {
  item: LabelItem;
};

export const TitleRenderer: React.FC<Props> = ({ item }) => {
  const { updateItem } = useTemplateStore();

  return (
    <ItemRenderer item={item}>
      <Form.Control
        type="text"
        placeholder=""
        value={item.label}
        onChange={(event) => {
          item.label = event.target.value;
          updateItem(item);
        }}
      />
    </ItemRenderer>
  )
}
