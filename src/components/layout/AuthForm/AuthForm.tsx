import React, { ChangeEventHandler, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { createUser, signIn } from '../../../actions/user.actions';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import cl from './AuthForm.module.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';

function AuthForm() {
  const [key, setKey] = useState('signin');

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k: React.SetStateAction<string>) => setKey(k)} className="mb-3">
      <Tab eventKey="signin" title="Войти">
        <SignIn />
      </Tab>
      <Tab eventKey="signup" title="Регистрация">
        <SignUp />
      </Tab>
    </Tabs>
  );
}

export default AuthForm;
