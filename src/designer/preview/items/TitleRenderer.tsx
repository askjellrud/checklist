import { Flex } from "../../../common/Flex";
import { TitleItem } from "../../template/template";
import { ItemRenderer } from "./ItemRenderer";


type Props = {
    item: TitleItem;
};

export const TitleRenderer: React.FC<Props> = ({ item }) => {
    return (
        <ItemRenderer>
            <Flex style={{ fontSize: "24px", fontWeight: "450" }}>
                {item.label}
            </Flex>
        </ItemRenderer>
    )
}
