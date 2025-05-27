interface ThemeStore {
    theme: string;
    toggleTheme: () => void;
    fetchTheme: () => void;
}

interface Item {
    id: string;
    title: string;
    category: string;
}