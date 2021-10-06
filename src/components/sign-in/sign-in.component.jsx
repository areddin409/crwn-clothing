import React, { useState } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleSumbit = async (event) => {
    event.preventDefault();
    const { email, password } = login;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setLogin({ email: '', password: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setLogin((prevInputData) => ({ ...prevInputData, [name]: value }));
  };

  const { email, password } = login;
  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSumbit}>
        <FormInput
          type='email'
          name='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          handleChange={handleChange}
          label='Password'
          value={password}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
