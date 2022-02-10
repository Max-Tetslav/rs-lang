import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import cl from './Modal.module.scss';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  headerText: string;
}

function Modal({ isShown, hide, headerText }: ModalProps) {
  const modal = (
    <div className={cl.backdrop}>
      <section className={cl.wrapper}>
        <div className={cl.header}>
          <h5 className={cl.headerText}>{headerText}</h5>
          <button className={cl.closeBtn} type="button" onClick={hide}>
            X
          </button>
        </div>
        <div className={cl.content}>
          <AuthForm />
        </div>
      </section>
    </div>
  );

  return isShown ? modal : null;
}

export default Modal;
