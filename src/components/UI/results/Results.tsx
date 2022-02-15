import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IWord } from '../../../types/wordTypes';
import playEnglishWord from '../../../utils/helpers/playEnglishWord';
import cl from './Results.module.scss';

interface IResultsProps {
  isResultsShow: boolean;
  setIsResultsShow: (isResultsShow: boolean) => void;
  wrongAnswers: (IWord | null)[];
  rightAnswers: (IWord | null)[];
  setWrongAnswers: (wrongAnswers: (IWord | null)[]) => void;
  setRightAnswers: (rightAnswers: (IWord | null)[]) => void;
}

function Results({
  isResultsShow,
  setIsResultsShow,
  wrongAnswers,
  rightAnswers,
  setRightAnswers,
  setWrongAnswers,
}: IResultsProps) {
  const navigation = useNavigate();

  return (
    <div className={cl.wrapper}>
      {/* <div className={cl.background}></div> */}
      <div className={cl.wrapperResult}>
        <div className={cl.container}>
          <h3>Результаты</h3>
        </div>
        <div className={cl.container}>
          <div className={cl.columnResults}>
            <h5>
              Я знаю <span className={cl.countRightAnswers}>{rightAnswers.length}</span>
            </h5>
            {rightAnswers.map((rightAnswer) => {
              return (
                <div key={rightAnswer?.word}>
                  <button type="button" onClick={() => playEnglishWord(rightAnswer?.audio)}>
                    sound
                  </button>
                  <h6 style={{ letterSpacing: 1 }}>
                    {rightAnswer?.word} - {rightAnswer?.wordTranslate}{' '}
                  </h6>
                </div>
              );
            })}
          </div>
          <div className={cl.columnResults}>
            <h5>
              Я не знаю <span className={cl.countRightAnswers}>{wrongAnswers.length}</span>
            </h5>
            {wrongAnswers.map((wrongAnswer) => {
              return (
                <div key={wrongAnswer?.word}>
                  <button type="button" onClick={() => playEnglishWord(wrongAnswer?.audio)}>
                    sound
                  </button>
                  <h6 style={{ letterSpacing: 1 }}>
                    {wrongAnswer?.word} - {wrongAnswer?.wordTranslate}{' '}
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
        <div className={cl.backSection}>
          <button
            type="button"
            className={cl.backButton}
            onClick={() => {
              setIsResultsShow(false);
              setRightAnswers([]);
              setWrongAnswers([]);
              navigation('/games');
            }}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
