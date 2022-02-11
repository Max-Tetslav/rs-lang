import React from 'react';
import cl from './GroupButton.module.scss';

type GroupButtonProps = {
  group: number;
  setChosenLevel: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GroupButton({ group, setChosenLevel }: GroupButtonProps) {
  const handleGroupClick = () => {
    setChosenLevel(true);
  };
  return (
    <button className={cl.groupButton} type="button" onClick={handleGroupClick}>
      <span className={cl.groupNumber}>{group + 1}</span>
    </button>
  );
}
