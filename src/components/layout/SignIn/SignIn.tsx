import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { signIn } from '../../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../../utils/helpers/appHooks';
import cl from './AuthForm.module.scss';

function SignIn() {
  const [error, setError] = useState({
    error: false,
    message: '',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((state) => state.users.loggedIn);

  useEffect(() => {
    if (submitted && !loggedIn) {
      setError({ ...error, error: true, message: 'Неверный email или пароль!' });
    }
  }, [loggedIn]);

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setEmail(e.target.value);
  };
  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setPassword(e.target.value);
  };

  const validateForm = (): boolean => {
    const validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (password.length < 8 && !validEmail.test(email)) {
      setError({ ...error, error: true, message: `Неверный email! \u00b7 Длина пароля не менее 8 символов!` });
      return false;
    }
    if (password.length < 8) {
      setError({ ...error, error: true, message: 'Длина пароля не менее 8 символов!' });
      return false;
    }
    if (!validEmail.test(email)) {
      setError({ ...error, error: true, message: 'Неверный email!' });
      return false;
    }
    setError({ ...error, error: false, message: '' });
    return true;
  };

  const signin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    setSubmitted(true);
    if (validateForm()) {
      dispatch(signIn({ email, password }));
    }
  };

  return (
    <Form className={cl.authForm} name="form">
      <Form.Group className={cl.formGroup}>
        <Form.Label htmlFor="email">
          Email
          <Form.Control
            type="email"
            className="form-control col"
            name="email"
            placeholder="email"
            onChange={onEmailChange}
            value={email}
          />
          {submitted && !email && (
            <small id="emailHelp" className="form-text text-muted">
              Email is required
            </small>
          )}
        </Form.Label>
      </Form.Group>
      <Form.Group className={cl.formGroup}>
        <Form.Label htmlFor="password">
          Password
          <Form.Control
            type="password"
            className="form-control col"
            name="password"
            placeholder="password"
            onChange={onPasswordChange}
            value={password}
          />
          {submitted && !password && (
            <small id="passwordlHelp" className="form-text text-muted">
              Password is required
            </small>
          )}
        </Form.Label>
      </Form.Group>
      <small id="errorHelp" className={cl.errorHelp}>
        {error.message}
      </small>
      <Button variant="primary" type="submit" onClick={(e) => signin(e)}>
        Войти
      </Button>
    </Form>
  );
}

export default SignIn;
