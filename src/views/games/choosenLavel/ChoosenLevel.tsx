import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GroupButton from '../../../components/UI/groupButton/GroupButton';
import cl from './ChoosenLevel.module.scss';
import Button from '../../../components/UI/button/Button';
import { ChosenGameProps } from '../../../types/gameTypes';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import { updateLevel } from '../../../store/reducers/gameReducer';
import { update } from '../../../store/reducers/pageTitleReducer';

interface IProps {
  choosenGame: ChosenGameProps;
  setChoosenGame: React.Dispatch<React.SetStateAction<ChosenGameProps | null>>;
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const COUNT_GROUP = 6;

export default function ChoosenLevel({
  choosenGame: { gameName, gameLink },
  setChoosenGame,
  setIsGameStart,
}: IProps): JSX.Element {
  const [isChosenLevel, setIsChosenLevel] = useState<boolean>(false);
  const [level, setLevel] = useState(0);
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const getGroupButtons = () => {
    const groupButtons = [];
    for (let i = 0; i < COUNT_GROUP; i += 1) {
      groupButtons.push(<GroupButton key={i} group={i} setIsChosenLevel={setIsChosenLevel} setLevel={setLevel} />);
    }
    return groupButtons;
  };

  useEffect(() => {
    if (isChosenLevel) {
      dispatch(updateLevel(level));
      navigation(gameLink);
      setIsGameStart(true);
      dispatch(update(gameName));
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
            clickHandler={() => {
              setChoosenGame(null);
            }}
            content="Назад к играм"
          />
        </div>
      </div>
    </div>
  );
}
