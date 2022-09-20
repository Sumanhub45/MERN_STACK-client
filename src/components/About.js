import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        window.alert('error');
      }

    } catch (err) {
      console.log(err);
      window.alert('Error');
      history.push('/login');
     
    }
  }

  useEffect(() => {
    callAboutPage();
  })


  return (
    <div className='home'>
      <form method='GET' className="login-form" id='login-form'>
      <h1>Suman Biswas</h1>
      <p>This is the<spam style={{ color: "red" }}> about</spam> page</p>
      </form>
    </div>
  )
}

export default About