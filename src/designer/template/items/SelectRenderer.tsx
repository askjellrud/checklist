import { Form } from "react-bootstrap";
import { SelectItem } from "../template";
import { ItemRenderer } from "../ItemRenderer";
import { useTemplateStore } from "../useTemplateStore";
import { Flex } from "../../../common/Flex";

type Props = {
  item: SelectItem;
};

export const SelectRenderer: React.FC<Props> = ({ item }) => {
  const { updateItem } = useTemplateStore();

  return (
    <ItemRenderer item={item}>
      <Flex fullWidth style={{ color: "#666" }} gap8 vertical>

        <Form.Control
          type="text"
          placeholder=""
          value={item.label}
          onChange={(event) => {
            item.label = event.target.value;
            updateItem(item);
          }}
        />

        {item.options.map((option, index) => (

          <Flex gap8 key={index}>
            -
            <Form.Control
              type="text"
              placeholder=""
              value={option}
              onChange={(event) => {
                item.options[index] = event.target.value;
                updateItem(item);
              }}
            />
            <i onClick={() => {
              item.options.splice(index, 1);
              updateItem(item);
            }} style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.7px", color: "rgb(255, 75, 75)", cursor: "pointer" }} className="bi bi-x" />

          </Flex>
        ))}

        <Flex onClick={() => {
          item.options.push("");
          updateItem(item);
        }}>
          <i style={{ fontSize: "20px", WebkitTextStrokeWidth: "1px", color: "#777", cursor: "pointer" }} className="bi bi-plus" />
          Add
        </Flex>
      </Flex>
    </ItemRenderer>
  )
}
