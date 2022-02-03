import React from 'react';
import cl from './Button.module.scss';

interface IProps {
  content: string;
}

function Button({ content }: IProps): JSX.Element {
  return (
    <button className={cl.btn} type="button">
      {content}
    </button>
  );
}

export default Button;
