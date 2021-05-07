import { useCallback, useState } from 'react';

export const useInput = ({ initialState }) => {
  const [value, setValue] = useState(initialState);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
