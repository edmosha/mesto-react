import {useContext} from 'react';
import {Link} from "react-router-dom";
import {CurrentUserContext} from "./contexts/CurrentUserContext";

const HeaderMenu = (props) => {
  const currentUser = useContext(CurrentUserContext);

  const handleExitClick = () => {
    props.handleLoggedIn(false);
    localStorage.removeItem("token");
    props.handleOpen();
  }

  return (
    <div className={`header__menu ${props.isOpen ? 'header__menu_opened' : ''}`}>
      <p className="header__login">{currentUser.email}</p>
      <Link to="/mesto-react/sign-in"
            className="header__link header__link_type_exit"
            onClick={handleExitClick}>
        Выйти
      </Link>
    </div>
  )
};

export default HeaderMenu;