import React from 'react';
import cl from './Answers.module.scss';

interface IParamButtonAnswer {
  handleAnswerClick: (response: string) => void;
  answer: string;
  index: number;
  hasAnswer: boolean;
}

export default function AnswerButton({ handleAnswerClick, answer, index, hasAnswer }: IParamButtonAnswer) {
  return (
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
  );
}
