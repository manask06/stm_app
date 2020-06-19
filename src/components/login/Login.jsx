import React, {useState} from 'react';
import avatar  from '../../avatar.svg'
import bg  from '../../personalization.svg'
import wave  from '../../wave.png'
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import {login} from '../../services/AuthService'
function Login() {
  const [values, setValues] = useState({email: '', password: ''})

  const handleSubmit = e => {
    e.preventDefault()
    login(values)
  }
  const handleTextChange = e => {
    console.log(e.target.id)
    setValues({...values, [e.target.id]: e.target.value})
  }

  return (
    <React.Fragment>
      <img className="Login_wave" src={wave} alt="" />
      <div className="Login_container">
        <div className="Login_img">
          <img src={bg} alt=""/>
        </div>
        <div className="login-content">
          <form className="Login_form" onSubmit={handleSubmit}>
            <img className="avatar" src={avatar} alt="" />
            <h2 className="title">Welcome</h2>
                  <div id="username-container" className={`login-input-div one `}>
                    <div className="Login_icon-holder">
                        <FontAwesomeIcon className="login-icons" icon={faEnvelope} />
                    </div>
                    <div className="div">
                        <h5>Email</h5>
                        <input onFocus={() => {
                          document.getElementById('username-container').classList.remove('blur')
                          document.getElementById('username-container').classList.add('focus')
                        }}
                        onBlur={() => {
                          if (values.email.length === 0) {
                            document.getElementById('username-container').classList.remove('focus')
                            document.getElementById('username-container').classList.add('blur')
                          }
                        }}
                        onChange={handleTextChange} id="email" type="text" className="input" />
                    </div>
                  </div>
                  <div id="password-container" className={`login-input-div pass `}>
                    <div className="Login_icon-holder">
                      <FontAwesomeIcon className="login-icons" icon={faLock} />
                    </div>
                    <div className="div">
                      <h5>Password</h5>
                      <input onFocus={() => {
                          document.getElementById('password-container').classList.remove('blur')
                          document.getElementById('password-container').classList.add('focus')
                        }}
                        onBlur={() => {
                          if (values.password.length === 0) {
                            document.getElementById('password-container').classList.remove('focus')
                            document.getElementById('password-container').classList.add('blur')
                          }
                        }}
                        onChange={handleTextChange} id="password" type="password" className="input focus" />
                    </div>
                  </div>
                  <a href="/">Forgot Password?</a>
                  <input type="submit" className="Login_btn" value="Login" />
            </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
