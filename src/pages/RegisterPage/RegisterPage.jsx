import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from '../Registration/Registration.module.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <div className={css.registration}>
      <h2 className={css.title}>Registration</h2>
      <form className={css.registrationForm} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            onInput={handleChange}
            className={css.input}
            value={name}
            type="text"
            placeholder="name"
            name="name"
            required
          />
        </label>
        <label className={css.label}>
          Email
          <input
            onInput={handleChange}
            className={css.input}
            value={email}
            type="email"
            placeholder="email"
            name="email"
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            onInput={handleChange}
            className={css.input}
            value={password}
            type="password"
            placeholder="password"
            name="password"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
};

export default Registration;
