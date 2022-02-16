import React, { useEffect } from 'react';
import cl from './Answers.module.scss';
import AnswerButton from './AnswerButton';

interface IAnswersProps {
  handleAnswerClick: (response: string) => void;
  handleNextWordClick: () => void;
  variantsAnswers: string[];
  hasAnswer: boolean;
  rightAnswer: string;
  answerWord: string;
}

export default function Answers({
  handleAnswerClick,
  handleNextWordClick,
  variantsAnswers,
  hasAnswer,
  rightAnswer,
  answerWord,
}: IAnswersProps) {
  const clickKeysHandler = (event: KeyboardEvent) => {
    if (['Digit1', 'Digit2', 'Digit3', 'Digit3', 'Digit4'].includes(event.code)) {
      if (!hasAnswer) {
        handleAnswerClick(variantsAnswers[+event.key - 1]);
      }
    } else if (event.code === 'Enter') {
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
