import React from 'react';
import { Button, Input } from '@mui/material';
import './com.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  
  const history = useHistory();
  const [user, setUser] = React.useState(
    { email: '', password: '' });

  const onEvent = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const { email, password } = user;

    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      window.alert('Invalid Login');
    }
    else {
      window.alert('Login Successful');
      history.push('/');
    }
  }



  return (
    <><form method='POST' className="login-form" id='login-form'>
      <div className='register'>

        Email<Input name='email' onChange={onEvent} label="Email" /><br />
        Password<Input name='password' onChange={onEvent} label="Password" />
        <Button onClick={onSubmit} variant="contained" color="primary">Login</Button>

      </div> 
      </form>

    </>
  )
}

export default Login