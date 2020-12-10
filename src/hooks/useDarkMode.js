import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  const [someValue, setSomeValue] = useLocalStorage('darkMode')
  return [someValue, setSomeValue];
};
