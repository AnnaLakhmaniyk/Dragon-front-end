import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redax/auth/auth-selector';
import { logOut } from '../../redax/auth/auth-operations';
import s from './Header.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUsername);

  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <p>{email[0]?.toUpperCase()}</p>
      </div>
      <div className={s.line}></div>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={s.exitBtn}
      >
        exit
      </button>
    </div>
  );
}
export default UserMenu;
