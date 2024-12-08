import { createElement, FC, ReactElement } from "react";

/**
 * Фабрика создания компонентов
 */
export default class ComponentsBuilder {
    /**
     * Метод создания компонента
     */
    public static create<Tkey extends {[key: string]: FC<any>}>(name: keyof Tkey, componentsList: Tkey): ReactElement {
        if (!name || ! componentsList) {
            throw new Error('Не передан один или несколько обязательных параметров');
        }

        if (!componentsList[name]) {
            throw new Error('Переданный компонент не найден в списке');
        }

        return createElement(componentsList[name], {});
    }
}