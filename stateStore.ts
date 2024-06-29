// stateStore.ts

import create from 'zustand';

type AppState = {
  data: { foo: string; baz: number } | null;
  setData: (data: { foo: string; baz: number }) => void;
};

const getDataFromLocalStorage = (): AppState['data'] => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('appData');
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
};

const saveDataToLocalStorage = (data: AppState['data']): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('appData', JSON.stringify(data));
  }
};

export const useAppState = create<AppState>((set) => ({
  data: getDataFromLocalStorage(),
  setData: (data) => {
    set({ data });
    saveDataToLocalStorage(data);
  },
}));
