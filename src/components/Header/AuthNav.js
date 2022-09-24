import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const active = ({ isActive }) => (isActive ? s.active : s.unactive);
function AuthNav() {
  return (
    <div className={s.wrap}>
      <NavLink to="/register" className={active}>
        Registration
      </NavLink>
      <NavLink to="/login" className={active}>
        Login
      </NavLink>
    </div>
  );
}
export default AuthNav;
