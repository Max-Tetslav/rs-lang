import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IWord } from '../../../types/wordTypes';
import playEnglishWord from '../../../utils/helpers/playEnglishWord';
import cl from './Results.module.scss';
import sound from '../../../assets/svg/sound.svg';
import Button from '../button/Button';
import { IStatsGame } from '../../../types/statsTypes';
import { useAppDispatch, useAppSelector } from '../../../utils/helpers/appHooks';
import { addStats } from '../../../store/reducers/statsReduser';
import UpdateStatistics from '../../../utils/helpers/apdateStatistic';

interface IProps {
  setIsResultsShow: (isResultsShow: boolean) => void;
  wrongAnswers: (IWord | null)[];
  rightAnswers: (IWord | null)[];
  setWrongAnswers: (wrongAnswers: (IWord | null)[]) => void;
  setRightAnswers: (rightAnswers: (IWord | null)[]) => void;
  seriesWords: number;
}

function Results({
  setIsResultsShow,
  wrongAnswers,
  rightAnswers,
  setRightAnswers,
  setWrongAnswers,
  seriesWords,
}: IProps): JSX.Element {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const today = new Date();
  // UpdateStatistics({ wrongAnswers: wrongAnswers, rightAnswers: rightAnswers, seriesWords: seriesWords });
  // const authId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') as string).userId : '';
  // useEffect(() => {
  //   if (authId) {
  //   }
  // }, [authId]);
  const statistics: IStatsGame = {
    userID: useAppSelector((state) => state.users.user.userId),
    nameGame: useAppSelector((state) => state.title.pageTitle),
    day: today.getDay(),
    month: today.getMonth(),
    year: today.getFullYear(),
    wordsTrue: rightAnswers.length,
    wordsFalse: wrongAnswers.length,
    seriesTrueAnswers: seriesWords,
  };

  dispatch(addStats(statistics));
  const st = useAppSelector((state) => state.stats.optional);
  localStorage.setItem('statistics', JSON.stringify(st));

  return (
    <div className={cl.wrapper}>
      <div className={cl.background}>
        <div className={cl.wrapperResult}>
          <div className={`${cl.container} ${cl.title}`}>
            <h1>Результаты</h1>
          </div>
          <div className={`${cl.container} ${cl.listResult}`}>
            <div className={cl.columnResults}>
              <h4 className={cl.titelList}>
                Я знаю <span className={cl.countRightAnswers}>{rightAnswers.length}</span>
              </h4>
              {rightAnswers.map((rightAnswer) => {
                return (
                  <div key={rightAnswer?.word} className={cl.answerLine}>
                    <button type="button" onClick={() => playEnglishWord(rightAnswer?.audio)}>
                      <img src={sound} alt="sound" className={cl.volumeRight} />
                    </button>
                    <h5 style={{ letterSpacing: 1 }}>
                      {rightAnswer?.word} - {rightAnswer?.wordTranslate}{' '}
                    </h5>
                  </div>
                );
              })}
              <h4 className={cl.titelList}>
                Я не знаю <span className={cl.countWrongAnswers}>{wrongAnswers.length}</span>
              </h4>
              {wrongAnswers.map((wrongAnswer) => {
                return (
                  <div key={wrongAnswer?.word} className={cl.answerLine}>
                    <button type="button" onClick={() => playEnglishWord(wrongAnswer?.audio)}>
                      <img src={sound} alt="sound" className={cl.volumeWrong} />
                    </button>
                    <h5 style={{ letterSpacing: 1 }}>
                      {wrongAnswer?.word} - {wrongAnswer?.wordTranslate}{' '}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={cl.backSection}>
            <Button
              content="Играть заново"
              clickHandler={() => {
                setIsResultsShow(false);
                setRightAnswers([]);
                setWrongAnswers([]);
                navigation('/games/audiocall');
              }}
            />
            <Button
              content="Закрыть"
              clickHandler={() => {
                setIsResultsShow(false);
                setRightAnswers([]);
                setWrongAnswers([]);
                navigation('/games');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
