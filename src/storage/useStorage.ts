import { StorageItems } from './storageItems';

export const useStorage = () => {
    const addItem = (name: StorageItems, value: boolean | string | number) => {
        localStorage.setItem(name, `${value}`);
    };
    const getItem = (item: StorageItems) => {
        localStorage.getItem(item);
    };
    const removeItem = (item: StorageItems) => {
        localStorage.removeItem(item);
    };
    const changeValue = (item: StorageItems, newValue: boolean | string | number) => {
        removeItem(item);
        addItem(item, `${newValue}`);
    };

    return {
        addItem,
        getItem,
        removeItem,
        changeValue
    };
};