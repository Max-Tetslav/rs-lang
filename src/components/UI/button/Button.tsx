import React from 'react';
import cl from './Button.module.scss';

interface IProps {
  content: string;
  click?: () => void; // eslint-disable-line
}

function Button({ content, click }: IProps): JSX.Element {
  return (
    <button onClick={click} className={cl.btn} type="button">
      {content}
    </button>
  );
}

export default Button;
