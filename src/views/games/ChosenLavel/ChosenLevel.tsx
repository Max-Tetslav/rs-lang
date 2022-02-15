import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GroupButton from '../../../components/UI/groupButton/GroupButton';
import cl from './ChosenLevel.module.scss';
import Button from '../../../components/UI/button/Button';
import { ChosenGameProps } from '../../../types/gameTypes';
import { setGameLevel } from '../../../store/actions/gameActions';

interface ChooseDifficultyProps {
  chosenGame: ChosenGameProps;
  setChosenGame: React.Dispatch<React.SetStateAction<ChosenGameProps | null>>;
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ChosenLevel({
  chosenGame: { gameName, gameLink },
  setChosenGame,
  setIsGameStart,
}: ChooseDifficultyProps) {
  const [isChosenLevel, setIsChosenLevel] = useState<boolean>(false);
  const [level, setLevel] = useState(0);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const getGroupButtons = () => {
    const groupButtons = [];
    for (let i = 0; i < 6; i += 1) {
      groupButtons.push(<GroupButton key={i} group={i} setIsChosenLevel={setIsChosenLevel} setLevel={setLevel} />);
    }
    return groupButtons;
  };

  useEffect(() => {
    if (isChosenLevel) {
      dispatch(setGameLevel(level));
      navigation(gameLink);
      setIsGameStart(true);
    }
  }, [isChosenLevel, gameLink, navigation]);

  return (
    <div className={cl.root}>
      <div className={cl.innerWrapper}>
        <h2 className={cl.gameName}>{gameName}</h2>
        <h3 className={cl.selectHeader}>Выберите уровень сложности</h3>
        <div className={cl.groupButtonsContainer}>{getGroupButtons()}</div>
        <div className={cl.backBtn}>
          <Button
            click={() => {
              setChosenGame(null);
            }}
            content="Назад к играм"
          />
        </div>
      </div>
    </div>
  );
}
