import { Form } from "react-bootstrap";
import { TitleItem } from "../template";
import { ItemRenderer } from "../ItemRenderer";
import { useTemplateStore } from "../useTemplateStore";

type Props = {
  item: TitleItem;
  isMain: boolean;
};

export const TitleRenderer: React.FC<Props> = ({ item, isMain }) => {
  const { updateItem, setName } = useTemplateStore();

  return (
    <ItemRenderer item={item}>
      <Form.Control
        type="text"
        placeholder=""
        value={item.label}
        onChange={(event) => {
          item.label = event.target.value;
          updateItem(item);
          if (isMain) {
            setName(item.label);
          }
        }}
      />
    </ItemRenderer>
  )
}
