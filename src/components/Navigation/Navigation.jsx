import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import css from './Navigation.module.css';
import Logo from '../../assets/phonebook_logo.svg';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navLink}>
      <NavLink className={css.link} to="/">
        <img src={Logo} alt="logo" width={48} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
