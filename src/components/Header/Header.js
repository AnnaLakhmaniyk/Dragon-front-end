import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import s from './Header.module.css';
import logo from './image/wp8917490.webp';

import { getIsLoggedIn } from '../../redax/auth/auth-selector';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.wrap}>
        <div className={s.logo}>
          <img src={logo} alt="" width="120px" height="50px" />
        </div>
        <div className={s.container}>{isLoggedIn && <UserMenu />}</div>
      </div>
    </header>
  );
}
