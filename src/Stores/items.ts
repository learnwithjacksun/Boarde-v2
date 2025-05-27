import { create } from "zustand";
import { persist } from "zustand/middleware";




interface ItemStore {
    items: Item[];
    addItem: (item: Item) => void;
    updateItem: (item: Item) => void;
    deleteItem: (item: Item) => void;
}

const useItemsStore = create<ItemStore>()(
    persist(
        (set)=>({
            items: [],
            addItem: (item) => set((state) => ({ items: [ item, ...state.items,] })),
            updateItem: (item) => set((state) => ({ items: state.items.map(i => i.id === item.id ? item : i) })),
            deleteItem: (item) => set((state) => ({ items: state.items.filter(i => i.id !== item.id) })),
        }),{
            name: "items",
            partialize: (state) => state.items,
        }
    )
)

export default useItemsStore;
