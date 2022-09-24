import { Container } from '../../components/Container/Container';
import s from './AuthView.module.css';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, logIn } from '../../redax/auth/auth-operations';

export default function AuthView() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = form;

  const onInput = e => {
    setForm(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const logInUser = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };
  const registerUser = e => {
    e.preventDefault();
    dispatch(register({ email, password }));
  };

  return (
    <Container>
      <div>
        <form className={s.form}>
          <p className={s.text}>
            Or login to our app using e-mail and password:
          </p>
          <div className={s.inputBlock}>
            <input
              onChange={onInput}
              id="email"
              value={email}
              className={s.input}
              type="text"
              placeholder="E-mail"
            />
            <input
              onChange={onInput}
              id="password"
              value={password}
              className={s.input}
              type="text"
              placeholder="Password"
            />
          </div>
          <div>
            <button onClick={logInUser} className={s.btn}>
              logIn
            </button>
            <button onClick={registerUser} className={s.btn}>
              register
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
