import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SignIn from './SignIn';
import SignUp from './SignUp';

function AuthForm() {
  const [key, setKey] = useState('signin');

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k!)} className="mb-3">
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
