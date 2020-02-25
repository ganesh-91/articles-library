import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { apiCallPost, apiCallGet } from '../../utils/authInterceptor';
import './AuthScreens.css'
import { startSession, getSession } from '../../utils/localStorageHelper';

const App = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('props', props)
    // return () => {
    //   cleanup
    // };

    if (getSession()) {
      console.log(getSession());
      // props.history.push('/app')
      apiCallGet('/auth/check', { email, password })
      .then((response) => {
        console.log(response);
        startSession(response.token);
        props.history.push('/app')
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      console.log('out')
    }

  }, [])

  const emailChanged = (e) => {
    setEmail(e.target.value)
  }

  const passChanged = (e) => {
    setPassword(e.target.value)
  }

  const loginSubmit = () => {
    apiCallPost('/auth/login', { email, password })
      .then((response) => {
        console.log(response);
        startSession(response.token);
        props.history.push('/app')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // const checkSubmit = () => {

  //   apiCallPost('/article', {
  //     "title": "new phone",
  //     "image": "n/a",
  //     "description": "description"
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       // startSession(response.token);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // }

  return (
    <main role="main" className="container text-center auth-screen-wrapper">

      <form className="form-sign-in">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" className="form-control" onChange={emailChanged} placeholder="Email" value={email} />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon2">@</span>
          </div>
          <input type="text" className="form-control" type="password" onChange={passChanged} placeholder="Password" value={password} />
        </div>

        <div className="checkbox mb-3">
          {/* <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label> */}
        </div>
        <button className="btn btn-lg btn-primary btn-block" onClick={loginSubmit} type="button">Sign in</button>
      </form>

    </main>
  );
}

export default App;
