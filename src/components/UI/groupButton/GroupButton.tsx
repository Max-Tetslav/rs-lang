import React from 'react';
import cl from './GroupButton.module.scss';

type GroupButtonProps = {
  group: number;
};

export default function GroupButton({ group }: GroupButtonProps) {
  return (
    <button className={cl.groupButton} type="button">
      <span className={cl.groupNumber}>{group + 1}</span>
    </button>
  );
}
