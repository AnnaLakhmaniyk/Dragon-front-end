import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, logIn } from '../../redax/auth/auth-operations';
import { toast } from 'react-toastify';
import { Container } from '../../components/Container/Container';
import s from './AuthView.module.css';

export default function AuthView() {
  // const [formValidity, setFormValidity] = useState('true');
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = form;
  const dispatch = useDispatch();

  const onInput = e => {
    if (!e.target.value) {
      toast.warn('Please enter your email');
      return;
    }
    setForm(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value.trim(),
      };
    });
  };

  const logInUser = e => {
    e.preventDefault();

    if (!form?.email && !form?.password) {
      toast.warn('Please enter your email and password');
      return;
    }
    dispatch(logIn({ email, password }));
  };
  const registerUser = e => {
    e.preventDefault();
    if (!form?.email && !form?.password) {
      toast.warn('Please enter email and password for registration');
      return;
    }

    dispatch(register({ email, password }));
    toast.success(`wellcom  ${email?.split('@')[0]} and now log in`);
  };

  return (
    <Container>
      <div className={s.auth}>
        <form className={s.form}>
          <p className={s.text}>
            Or log in using an email and password, after registering:
          </p>
          <div className={s.inputBlock}>
            <label className={s.label} htmlFor="email">
              <input
                onChange={onInput}
                id="email"
                value={email}
                className={s.input}
                type="text"
                placeholder="E-mail"
                required
              />
            </label>

            <label className={s.label} htmlFor="password">
              <input
                onChange={onInput}
                id="password"
                value={password}
                className={s.input}
                type="text"
                placeholder="Password"
                required
              />
            </label>
          </div>
          <div className={s.bunBlock}>
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
