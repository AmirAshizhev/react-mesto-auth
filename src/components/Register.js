const Register = () => {
  return (
    <form className="login">
    <h2 className="login__title">Регистрация</h2>
    <fieldset className="login__fieldset">
      <label className="popup__field">
        <input 
          id="" 
          type="email"  
          name="email" 
          placeholder="Email" 
          className="login__input" 
          required 
        />
        <span className="popup__item-error edit-button-name-error"></span>
      </label>
      <label className="popup__field">
        <input 
          id="" 
          type="text"  
          name="password" 
          placeholder="Пароль" 
          className="login__input" 
          required 
        />
        <span className="popup__item-error edit-button-description-error"> </span>
      </label>
    </fieldset>
    <button className="login__button" type="submit" aria-label="Войти">Войти</button>
    <p className="login__text">Уже зарегестрированы? <a className="login__link" href="#" target="_self">Войти</a></p>
  </form>
  )
}

export default Register