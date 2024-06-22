import { DividerItem } from "../../builder/template/template";
import { Flex } from "../../common/Flex";
import { ItemRenderer } from "./ItemRenderer";


type Props = {
    item: DividerItem;
};

export const DividerRenderer: React.FC<Props> = ({ item }) => {
    return (
        <ItemRenderer>
            <Flex fullWidth paddingTop16 paddingBottom8>
                <Flex style={{ border: "1px solid #888", position: "relative" }} fullWidth>
                    {item.label.length > 0 && <Flex style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        marginTop: '-5px',
                        marginLeft: '12px',
                        marginRight: '18px',
                        fontSize: "18px",
                        color: "#555",
                        backgroundColor: "white",
                        paddingLeft: "6px",
                        paddingRight: "7px",
                        borderLeft: "1.0px solid #888",
                        borderRight: "1.0px solid #888",
                        height: "10px"
                    }}>{item.label}
                    </Flex>}
                </Flex>
            </Flex>
        </ItemRenderer>
    )
}
