import React from 'react'
import { Button, Input } from '@mui/material';
import './com.css';
import {useHistory} from 'react-router-dom';


const Signup = () => {
  const history = useHistory();
  const [user, setUser] = React.useState(
    {name:'', email:'', phone:'', work:'', password:'',cpassword:''});

    const onEvent = (e) => {
      setUser({...user, [e.target.name]: e.target.value});
    }
    
    const onSubmit = async (e) => {
      e.preventDefault();
      console.log(user);
      const {name, email, phone, work, password, cpassword} = user;

      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, phone, work, password, cpassword})
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 422 || !data){
        window.alert('Invalid Registration');
      }
      else{
        window.alert('Registration Successful');
        history.push('/login');
      }
    }

  return (
    <>
      
        <form method = 'POST' className="register-form" id='register-form'>
        <div className='register'>
          Name<Input name = 'name' onChange = {onEvent} label="First Name" /><br />
          Email<Input name = 'email' onChange = {onEvent} label="Email" /><br />
          phone<Input name = 'phone' onChange = {onEvent} label="Work" /><br />
          Work<Input name = 'work' onChange = {onEvent} label="Work" /><br />
          Password<Input name = 'password' onChange = {onEvent} label="Password" /><br />
          Cpassword<Input name = 'cpassword' onChange = {onEvent} label="Confirm Password" />
          <Button onClick ={onSubmit} variant="contained" color="primary">Register</Button>
          </div>
        </form>
     
    </>
  )
}

export default Signup