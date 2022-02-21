import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../store/actions/userActions';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import Button from '../../UI/button/Button';
import cl from './ModalLogout.module.scss';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  headerText: string;
}

function ModalLogout({ isShown, hide, headerText }: ModalProps) {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const clickHandler = (action: boolean) => {
    if (action) {
      dispatch(logout());
      navigation('/');
    }
    hide();
  };

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
          Вы действительно хотите выйти из своей учетной записи?
          <div className={cl.btns__wrapper}>
            <Button content="Да" clickHandler={() => clickHandler(true)} />
            <Button content="Нет" clickHandler={() => clickHandler(false)} />
          </div>
        </div>
      </section>
    </div>
  );

  return isShown ? modal : null;
}

export default ModalLogout;
