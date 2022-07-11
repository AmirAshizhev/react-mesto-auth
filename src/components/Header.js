import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <a href="#" target="_blank" className="header__logo"></a>
      <Routes>
        <Route path="/" element={
          <div className="header__box">
            <p className="header__email">email</p>
            <Link className="header__link header__link_exit" to="/sign-in">
              Выйти
            </Link>
          </div>

        }/>
        <Route path="/sign-up" element={
          <Link className="header__link" to="/sign-in">
            Вход
          </Link>
        }/>
        <Route path="/sign-in" element={
          <Link className="header__link" to="/sign-up">
            Регистрация
          </Link>
        }/>
      </Routes>
    </header>
  )
}

export default Header