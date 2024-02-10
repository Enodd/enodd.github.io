import { StorageItems } from './storageItems';

export const useStorage = () => {
    const addItem = (name: StorageItems, value: boolean | string | number) => {
        if (localStorage.getItem(name) !== null) return;
        localStorage.setItem(name, `${value}`);
    };
    const getItem = (item: StorageItems) => {
        return localStorage.getItem(item);
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