import { useState } from "react";
import { useValidation } from '../hooks/useValidation';

const Login = ({handleLogin}) => {

  const formValues = useValidation();

  // const [data, setData] = useState({
  //   email: '',
  //   password: ''
  // });

  // function handleChange(e) {
  //   const {name, value} = e.target;
  //   setData((oldData) => ({
  //     ...oldData,
  //     [name]: value
  //   }))
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log (data)
    handleLogin(formValues.values);
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2 className="login__title">Вход</h2>
      <fieldset className="login__fieldset">
        <label className="popup__field">
          <input 
            type="email"  
            name="email" 
            placeholder="Email" 
            className="login__input" 
            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            required 
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
            value = {formValues.values.password || ""}
            minLength = {3}
          />
          <span className="popup__item-error edit-button-description-error">{formValues.errors.password}</span>
        </label>
      </fieldset>
      <button className="login__button" type="submit" aria-label="Войти" disabled={!formValues.isValid}>Войти</button>
    </form>
  )
}

export default Login