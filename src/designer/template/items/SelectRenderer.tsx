import { Form } from "react-bootstrap";
import { SelectItem } from "../template";
import { ItemRenderer } from "../ItemRenderer";
import { useTemplateStore } from "../useTemplateStore";
import { Flex } from "../../../common/Flex";
import { useRef } from "react";

type Props = {
  item: SelectItem;
};

export const SelectRenderer: React.FC<Props> = ({ item }) => {
  const { updateItem } = useTemplateStore();
  const inputRefs = useRef<(HTMLInputElement)[]>([]);

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
              ref={(el: HTMLInputElement) => (inputRefs.current[index] = el)}
              value={option}
              type="text"
              placeholder=""
              onChange={(event) => {
                item.options[index] = event.target.value;
                updateItem(item);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  item.options.splice(index + 1, 0, "");
                  updateItem(item);

                  setTimeout(() => {
                    if (inputRefs.current[index + 1]) {
                      inputRefs.current[index + 1].focus();
                    }
                  }, 0);
                }
              }}
            />
            <i className="bi bi-x" onClick={() => {
              item.options.splice(index, 1);
              updateItem(item);
            }} style={{ fontSize: "18px", WebkitTextStrokeWidth: "0.7px", color: "rgb(255, 75, 75)", cursor: "pointer" }} />

          </Flex>
        ))}

        {item.options.length < 1 &&
          <Flex className="bi bi-plus" onClick={() => {
            item.options.push("");
            updateItem(item);
          }}>
            <i style={{ fontSize: "20px", WebkitTextStrokeWidth: "1px", color: "#777", cursor: "pointer" }} />
            Add option
          </Flex>
        }

      </Flex>
    </ItemRenderer>
  )
}
