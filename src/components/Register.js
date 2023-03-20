import { Link } from "react-router-dom"
import { useValidation } from '../hooks/useValidation';

const Register = ({handleRegister}) => {

  const formValues = useValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(formValues.values)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
    <h2 className="login__title">Регистрация</h2>
    <fieldset className="login__fieldset">
      <label className="popup__field">
        <input 
          type="email"  
          name="email" 
          placeholder="Email" 
          className="login__input" 
          required 
          pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
          onChange={formValues.handleChange}
          value = {formValues.values.email || ""}
        />
        <span className="popup__item-error edit-button-name-error">{formValues.errors.email}</span>
      </label>
      <label className="popup__field">
        <input 
          type="password"  
          name="password" 
          placeholder="Пароль" 
          className="login__input" 
          required 
          onChange={formValues.handleChange}
          value ={formValues.values.password || ""}
          minLength = {3}
        />
        <span className="popup__item-error edit-button-description-error">{formValues.errors.password}</span>
      </label>
    </fieldset>
    <button className="login__button" type="submit" aria-label="Войти" disabled={!formValues.isValid}>Зарегестрироваться</button>
    <p className="login__text">Уже зарегестрированы? <Link className="login__link" to="/sign-in" target="_self">Войти</Link></p>
  </form>
  )
}

export default Register