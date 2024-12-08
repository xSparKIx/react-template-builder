import { FC, ReactElement, useMemo, useState } from 'react';
import { useDrop } from 'react-dnd';
import ComponentsList from '../components';
import MenuItem from '../components/menu-item';
import { ItemTypes } from '../constants/item-types.const';
import ComponentsBuilder from '../services/components-builder.service';
import { ComponentsList as CList, ComponentsListItem } from '../interfaces/components-list.interface';

const DndLayout: FC = () => {
    /**
     * Список компонентов для рендера
     */
    const [components, setComponents] = useState<ReactElement[]>([]);

    /**
     * Хук перемещения компонентов
     */
    const [_, drop] = useDrop<{ name: ComponentsListItem }>(
        () => ({
            accept: ItemTypes.Cmp,
            drop: (item) => {
                const cmp = ComponentsBuilder.create<CList>(item.name, ComponentsList);
                setComponents((prev) => [...prev, cmp]);
            },
        }),
    );

    /**
     * Список пунктов меню
     */
    const menuItems = useMemo(() => {
        return Object.entries(ComponentsList).map(([name, cmp]) => ({ name, cmp }));
    }, []);

    return (
        <>
            <section id="main" ref={drop}>
                {components.map((cmp) => cmp)}
            </section>

            <aside id="menu">
                {/* todo: Поправить as ComponentsListItem */}
                {menuItems.map(({ name }) => <MenuItem name={name as ComponentsListItem} />)}
            </aside>
        </>
    )
}

export default DndLayout