import { useState } from "react";

export const useLocalStorage = ({ key, initialValue }: { key: string; initialValue: any }) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState(initial);

  const updateValue = (value: any) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeValue = () => {
    setValue(initialValue);
    localStorage.removeItem(key);
  };

  return [value, updateValue, removeValue] as const;
};
