import { useState } from 'react';

const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(true);
  const toggle = () => setIsShown(!isShown);
  
  return {
    isShown,
    toggle,
  };
};

export default useModal;
