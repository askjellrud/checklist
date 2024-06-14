import { TextItem } from "../template/template";
import { ItemRenderer } from "./ItemRenderer";

type Props = {
    item: TextItem;
};

export const TextRenderer: React.FC<Props> = ({ item }) => {
    return (
        <ItemRenderer>
            {item.label}: {item.defaultValue}
        </ItemRenderer>
    )
}
