import React from 'react';
import cl from './Answers.module.scss';

interface IProps {
  handleAnswerClick: (response: string) => void;
  answer: string;
  index: number;
  hasAnswer: boolean;
  rightAnswer: string;
  answerWord: string;
}

export default function AnswerButton({
  handleAnswerClick,
  answer,
  index,
  hasAnswer,
  rightAnswer,
  answerWord,
}: IProps): JSX.Element {
  return (
    <div>
      {answerWord === answer ? (
        <button
          className={`${cl.buttonAnswer} ${rightAnswer === answer ? cl.disabledR : cl.disabledF}`}
          disabled={hasAnswer}
          type="button"
          key={answer}
          id={answer}
          onClick={() => {
            handleAnswerClick(answer);
          }}
        >
          {index + 1}
          {' - '} {answer}
        </button>
      ) : (
        <button
          className={cl.buttonAnswer}
          disabled={hasAnswer}
          type="button"
          key={answer}
          id={answer}
          onClick={() => {
            handleAnswerClick(answer);
          }}
        >
          {index + 1}
          {' - '} {answer}
        </button>
      )}
    </div>
  );
}
