import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GroupButton from '../../../components/UI/groupButton/GroupButton';
import cl from './ChosenLevel.module.scss';
import Button from '../../../components/UI/button/Button';
import { ChosenGameProps } from '../../../types/gameTypes';

type ChooseDifficultyProps = {
  chosenGame: ChosenGameProps;
  setChosenGame: React.Dispatch<React.SetStateAction<ChosenGameProps | null>>;
};

export default function ChosenLevel({ chosenGame: { gameName, gameLink }, setChosenGame }: ChooseDifficultyProps) {
  const [chosenLevel, setChosenLevel] = useState<boolean>(false);
  const navigation = useNavigate();
  const getGroupButtons = () => {
    const groupButtons = [];
    for (let i = 0; i < 6; i += 1) {
      groupButtons.push(<GroupButton key={i} group={i} setChosenLevel={setChosenLevel} />);
    }
    return groupButtons;
  };

  useEffect(() => {
    if (chosenLevel) {
      navigation(gameLink);
    }
  }, [chosenLevel, gameLink, navigation]);

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
