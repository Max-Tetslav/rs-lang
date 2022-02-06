import React, { ChangeEventHandler, useState } from 'react';
import { createUser, signIn } from '../../../actions/user.actions';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import './authForm.scss';

function AuthForm() {
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

  const signin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    setSubmitted(true);
    if (validateForm()) {
      dispatch(signIn({ email, password }));
    }
  };

  return (
    <form className="auth-form" name="form">
      <div className="form-group">
        <label htmlFor="username">
          Username
          <input
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
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email
          <input
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
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password
          <input
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
        </label>
      </div>
      <small id="errorHelp" className="form-text text-muted error-help">
        {error.message}
      </small>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" type="submit" onClick={(e) => signin(e)}>
          Войти
        </button>
        <button className="btn btn-primary" type="submit" onClick={(e) => signup(e)}>
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}

export default AuthForm;
