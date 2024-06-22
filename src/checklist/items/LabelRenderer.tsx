import { LabelItem } from "../../builder/template/template";
import { ItemRenderer } from "./ItemRenderer";


type Props = {
    item: LabelItem;
};

export const LabelRenderer: React.FC<Props> = ({ item }) => {
    return (
        <ItemRenderer>
            {item.label}
        </ItemRenderer>
    )
}
