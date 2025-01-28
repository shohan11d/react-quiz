import { useEffect, useState } from 'react';

function useStorage(initial, key) {
  const [value, setValue] = useState(function () {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initial;
  });

  useEffect(
    function () {
      localStorage.setItem('key', JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

export default useStorage;
