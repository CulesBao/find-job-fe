import { useCallback, useState } from "react";

const useStorage = (key, initialValue) => {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storeValue) : value;
        setStoreValue(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(error);
      }
    },
    [storeValue, key]
  );

  const removeItem = useCallback(() => {
    try {
      setStoreValue(initialValue);
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }, [key, initialValue]);

  return [storeValue, setValue, removeItem];
};
export default useStorage;
