import React, { ChangeEventHandler, useState } from 'react';
import { Form } from 'react-bootstrap';
import { createUser } from '../../../actions/user.actions';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import cl from './AuthForm.module.scss';

function SignUp() {
  const [error, setError] = useState({
    error: false,
    message: '',
  });

  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useAppDispatch();

  const onNameChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setUsername(e.target.value);
  };
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

  const signup = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    setSubmitted(true);
    if (validateForm() && name) {
      dispatch(createUser({ email, password, name }));
    }
  };

  return (
    <Form className={cl.authForm} name="form">
      <Form.Group className={cl.formGroup}>
        <Form.Label htmlFor="username">
          Username
          <Form.Control
            type="text"
            className="form-control col"
            name="username"
            placeholder="name"
            onChange={onNameChange}
            value={name}
          />
          {submitted && !name && (
            <small id="namelHelp" className="form-text text-muted">
              Username is required
            </small>
          )}
        </Form.Label>
      </Form.Group>

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
      <button className="btn btn-primary" type="submit" onClick={(e) => signup(e)}>
        Зарегистрироваться
      </button>
    </Form>
  );
}

export default SignUp;
