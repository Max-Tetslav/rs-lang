import React from 'react';
import cl from './GroupButton.module.scss';

interface IProps {
  group: number;
  setIsChosenLevel: React.Dispatch<React.SetStateAction<boolean>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}
export default function GroupButton({ group, setIsChosenLevel, setLevel }: IProps): JSX.Element {
  const handleGroupClick = () => {
    setIsChosenLevel(true);
    setLevel(group);
  };
  return (
    <button className={cl.groupButton} type="button" onClick={handleGroupClick}>
      <span className={cl.groupNumber}>{group + 1}</span>
    </button>
  );
}
