import ComponentsList from "../components";

/**
 * Тип списка компонентов
 */
export type ComponentsList = typeof ComponentsList;
/**
 * Тип элемента списка компонентов
 */
export type ComponentsListItem = keyof ComponentsList;