import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register, logIn } from '../../redax/auth/auth-operations';
import { toast } from 'react-toastify';
import { Container } from '../../components/Container/Container';
import s from './AuthView.module.css';
const errorState = {
  emailError: 'This is a required field',
  passwordError: 'This is a required field',
};
const dirtyState = {
  emailDirty: false,
  passwordDirty: false,
};
export default function AuthView() {
  const [formValidity, setFormValidity] = useState('true');
  const [dirty, setDirty] = useState(dirtyState);
  const [error, setError] = useState(errorState);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { email, password } = form;
  const { emailError, passwordError } = error;
  const { emailDirty, passwordDirty } = dirty;

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValidity(false);
    } else {
      setFormValidity(true);
    }
  }, [emailError, passwordError]);

  const onInput = e => {
    setForm(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value.trim(),
      };
    });
    if (e.target.id === 'password') {
      if (e.target.value.length !== 0 && e.target.value.length < 8) {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: 'Password must be not less than 8 symbols',
          };
        });
      } else if (!e.target.value) {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: 'This is a required field',
          };
        });
      } else {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: '',
          };
        });
      }
    }

    if (e.target.id === 'email') {
      const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (e.target.value) {
        if (!pattern.test(String(e.target.value).toLowerCase())) {
          setError(prevState => {
            return {
              ...prevState,
              emailError: 'Incorrect email format',
            };
          });
        } else {
          setError(prevState => {
            return {
              ...prevState,
              emailError: '',
            };
          });
        }
      } else {
        setError(prevState => {
          return {
            ...prevState,
            emailError: 'This is a required field',
          };
        });
      }
    }
  };

  const onBlur = e => {
    switch (e.target.id) {
      case 'email':
        setDirty(prevState => {
          return {
            ...prevState,
            emailDirty: true,
          };
        });
        break;

      case 'password':
        setDirty(prevState => {
          return {
            ...prevState,
            passwordDirty: true,
          };
        });
        break;

      default:
        return;
    }
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
    if (!form?.password && !form?.email) {
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
                onBlur={onBlur}
                value={email}
                className={s.input}
                type="text"
                placeholder="E-mail"
                required
              />
              {emailDirty && emailError && (
                <p className={s.message}>{emailError}</p>
              )}
            </label>

            <label className={s.label} htmlFor="password">
              <input
                onChange={onInput}
                id="password"
                onBlur={onBlur}
                value={password}
                className={s.input}
                type="text"
                placeholder="Password"
                required
              />
              {passwordDirty && passwordError && (
                <p className={s.message}>{passwordError}</p>
              )}
            </label>
          </div>
          <div className={s.bunBlock}>
            <button
              onClick={logInUser}
              className={s.btn}
              disabled={!formValidity}
            >
              logIn
            </button>
            <button
              onClick={registerUser}
              className={s.btn}
              disabled={!formValidity}
            >
              register
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
