import React from 'react';
import cl from './SprintButton.module.scss';

interface IProps {
  checkAnswer: (flag: boolean) => void;
}

function SprintButton({ checkAnswer }: IProps): JSX.Element {
  return (
    <div className={cl.container}>
      <button className={[cl.btn, cl.btn_right].join(' ')} type="button" onClick={() => checkAnswer(true)}>
        Верно
      </button>
      <button className={[cl.btn, cl.btn_wrong].join(' ')} type="button" onClick={() => checkAnswer(false)}>
        Неверно
      </button>
    </div>
  );
}

export default SprintButton;
