import UserMenu from './UserMenu';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <UserMenu />
    </header>
  );
}
