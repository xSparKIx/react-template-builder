import { useDrag } from "react-dnd"
import { ItemTypes } from "../constants/item-types.const";
import { FC } from "react";
import { ComponentsListItem } from "../interfaces/components-list.interface";

interface Props {
    name: ComponentsListItem;
}

/**
 * Элемент пункта
 * @param param0
 * @returns 
 */
const MenuItem: FC<Props> = ({ name }) => {
    const [{ opacity }, drag] = useDrag(
        () => ({
            type: ItemTypes.Cmp,
            item: { name },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [name],
    );

    return (
        <div ref={drag} style={{ opacity }}>{name}</div>
    )
}

export default MenuItem;