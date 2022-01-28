import React, { ReactElement } from 'react';
import cl from './Button.module.scss';

export default function Button(props: {onClick?: () => void, content: string}): ReactElement {
  return (
    <button className={cl.btn} onClick={props.onClick}>{props.content}</button>
  );
}
