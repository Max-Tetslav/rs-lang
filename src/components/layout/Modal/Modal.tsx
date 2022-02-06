import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import AuthForm from '../AuthForm/AuthForm';
import './Modal.scss';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  headerText: string;
}

function Modal({ isShown, hide, headerText }: ModalProps) {
  const modal = (
    <>
      <div className="backdrop"> </div>
      <div className="wrapper">
        <div className="styled-modal">
          <div className="header">
            <div className="header-text">{headerText}</div>
            <button className="close-btn" type="button" onClick={hide}>
              X
            </button>
          </div>
          <div className="content">
            <AuthForm />
          </div>
        </div>
      </div>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}

export default Modal;
