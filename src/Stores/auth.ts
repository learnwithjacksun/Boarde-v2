import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  name: string | null;
  setName: (name: string) => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      name: null,
      setName: (name) => set({ name }),
     
    }),
    {
      name: "auth",
      partialize: (state) => ({
        name: state.name,
      }),
    }
  )
);

export default useAuthStore;
