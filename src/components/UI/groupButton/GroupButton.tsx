import React from 'react';
import { updatePage } from '../../../store/reducers/gameReducer';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import getRandomPageNum from '../../../utils/helpers/getRandomPageNum';
import cl from './GroupButton.module.scss';

interface IProps {
  group: number;
  setIsChosenLevel: React.Dispatch<React.SetStateAction<boolean>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}
export default function GroupButton({ group, setIsChosenLevel, setLevel }: IProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleGroupClick = () => {
    dispatch(updatePage(getRandomPageNum()));
    setIsChosenLevel(true);
    setLevel(group);
  };

  return (
    <button className={cl.groupButton} type="button" onClick={handleGroupClick}>
      <span className={cl.groupNumber}>{group + 1}</span>
    </button>
  );
}
