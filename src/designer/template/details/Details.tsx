
import { Flex } from "../../../common/Flex";
import { TemplateItem, TextItem } from "../template";
import { useTemplateStore } from "../useTemplateStore";
import { TextDetails } from "./TextDetails";
type Props = {
  item: TemplateItem;
};

export const Details: React.FC<Props> = ({ item }) => {
  const { moveItem } = useTemplateStore();

  return (
    <Flex style={{ backgroundColor: "#f7f7f7" }} fullWidth paddingLeft16 paddingRight8 paddingTop16 paddingBottom16>
      <Flex fullWidth paddingRight16>
        {item.type === "text" && <TextDetails item={item as TextItem} />}
      </Flex>
      <Flex vertical paddingTop8>
        <Flex onClick={() => moveItem(item, -1)}>
          <i style={{ WebkitTextStrokeWidth: "1.2px", color: "#777", fontSize: "18px" }} className="bi bi-arrow-up" />
        </Flex>
        <Flex onClick={() => moveItem(item, 1)}>
          <i style={{ WebkitTextStrokeWidth: "1.2px", color: "#777", fontSize: "18px" }} className="bi bi-arrow-down" />
        </Flex>
      </Flex>
    </Flex>
  )
}
