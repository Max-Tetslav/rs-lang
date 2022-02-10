import React from 'react';
import cl from './Answers.module.scss';

interface IAnswersProps {
  handleAnswerClick: (response: string) => void;
  handleNextWordClick: () => void;
  variantsAnswers: string[];
  hasAnswer: boolean;
}

export default function Answers({ handleAnswerClick, handleNextWordClick, variantsAnswers, hasAnswer }: IAnswersProps) {
  return (
    <>
      <div className={cl.answersWrapper}>
        {variantsAnswers.map((answer, index) => {
          return (
            <button
              className={cl.buttonAnswer}
              type="button"
              key={answer}
              id={answer}
              onClick={() => {
                handleAnswerClick(answer);
              }}
            >
              {index + 1} {answer}{' '}
            </button>
          );
        })}
      </div>
      <div className={cl.answersWrapper}>
        <button className={`${cl.buttonAnswer} ${cl.nextButton}`} type="button" id="next" onClick={handleNextWordClick}>
          {hasAnswer ? '→' : 'Не знаю'}
        </button>
      </div>
    </>
  );
}
