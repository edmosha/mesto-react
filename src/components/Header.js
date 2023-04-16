import {useState} from "react";
import logo from "../images/logo.svg";
import {Link, useLocation} from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import useWindowSize from "./hooks/useWindowSize";
import HamburgerButton from "./HamburgerButton";

function Header(props) {
  const url = useLocation().pathname;
  const {width} = useWindowSize();
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleHeaderLink = () => {
    return (url === "/sign-in" && <Link to="/sign-up" className="header__link">Регистрация</Link>) ||
           (url === "/sign-up" && <Link to="/sign-in" className="header__link">Войти</Link>)
  }

  return (
    <header className="header">

      {width < 768 && props.loggedIn
        && <HeaderMenu handleLoggedIn={ props.handleLoggedIn }
                       isOpen={isMenuOpen}
                       loggedIn={props.loggedIn}
                       handleOpen={ handleMenuOpen }
        />}

      <div className="header__container">
        <img className="header__logo" src={logo} alt="логотип Mesto"/>
        {
          props.loggedIn
            ? (width > 767)
              ? <HeaderMenu handleLoggedIn={ props.handleLoggedIn } />
              : <HamburgerButton handleClick={ handleMenuOpen } isOpen={isMenuOpen}/>
            : handleHeaderLink()
        }
      </div>

    </header>
  )
}

export default Header;