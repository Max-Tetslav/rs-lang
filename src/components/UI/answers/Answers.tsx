import React, { useEffect } from 'react';
import cl from './Answers.module.scss';
import AnswerButton from './AnswerButton';

interface IProps {
  handleAnswerClick: (response: string) => void;
  handleNextWordClick: () => void;
  variantsAnswers: string[];
  hasAnswer: boolean;
  rightAnswer: string;
  answerWord: string;
}

enum Key {
  Digit1 = 'Digit1',
  Digit2 = 'Digit2',
  Digit3 = 'Digit3',
  Digit4 = 'Digit4',
  Numpad1 = 'Numpad1',
  Numpad2 = 'Numpad2',
  Numpad3 = 'Numpad3',
  Numpad4 = 'Numpad4',
  Enter = 'Enter',
  NumpadEnter = 'NumpadEnter',
}

export default function Answers({
  handleAnswerClick,
  handleNextWordClick,
  variantsAnswers,
  hasAnswer,
  rightAnswer,
  answerWord,
}: IProps): JSX.Element {
  const clickKeysHandler = (event: KeyboardEvent) => {
    if (Object.values(Key).find((k) => k === event.code && Key.Enter !== event.code && Key.NumpadEnter !== event.code)) {
      if (!hasAnswer) {
        handleAnswerClick(variantsAnswers[+event.key - 1]);
      }
    } else if (event.code === Key.Enter || Key.NumpadEnter === event.code) {
      handleNextWordClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', clickKeysHandler);
    return () => {
      window.removeEventListener('keydown', clickKeysHandler);
    };
  });

  return (
    <>
      <div className={cl.answersWrapper}>
        {!hasAnswer && (
          <div className={cl.buttonWrapper}>
            {variantsAnswers.map((answer, index) => {
              return (
                <AnswerButton
                  handleAnswerClick={handleAnswerClick}
                  answer={answer}
                  index={index}
                  hasAnswer={hasAnswer}
                  rightAnswer={rightAnswer}
                  answerWord={answerWord}
                />
              );
            })}
          </div>
        )}
        {hasAnswer && (
          <div className={cl.buttonWrapper}>
            {variantsAnswers.map((answer, index) => {
              return (
                <AnswerButton
                  handleAnswerClick={handleAnswerClick}
                  answer={answer}
                  index={index}
                  hasAnswer={hasAnswer}
                  rightAnswer={rightAnswer}
                  answerWord={answerWord}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className={cl.answersWrapper}>
        <button className={`${cl.buttonAnswer} ${cl.nextButton}`} type="button" id="next" onClick={handleNextWordClick}>
          {hasAnswer ? '→' : 'Не знаю'}
        </button>
      </div>
    </>
  );
}
