import React from 'react';
import cl from './Button.module.scss';

interface IProps {
  content: string;
  clickHandler: () => void;
}

function Button({ content, clickHandler }: IProps): JSX.Element {
  return (
    <button className={cl.btn} type="button" onClick={clickHandler}>
      {content}
    </button>
  );
}

export default Button;
