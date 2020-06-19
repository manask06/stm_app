import React, {useState} from 'react';
import avatar  from '../../avatar.svg'
import bg  from '../../resumes_folder2.svg'
import wave  from '../../wave.png'
import './Signup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {signup} from '../../services/AuthService'
function Signup() {

  const [values, setValues] = useState({email: '', name: '', password: ''})

  const handleSubmit = e => {
    e.preventDefault()
    signup(values)
  }

  const handleTextChange = e => {
    setValues({...values, [e.target.id]: e.target.value})
  }


  return (
    <React.Fragment>
      <img className="Signup_wave" src={wave} alt="" />
      <div className="Signup_container">
        <div className="img">
          <img src={bg} alt=""/>
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img className="avatar" src={avatar} alt="" />
            <h2 className="title">Signup</h2>
                  <div id="email-container" className={`input-div one `}>
                    <div className="i">
                        <FontAwesomeIcon className="login-icons" icon={faEnvelope} />
                    </div>
                    <div className="div">
                        <h5>Email</h5>
                        <input onFocus={() => {
                          document.getElementById('email-container').classList.remove('blur')
                          document.getElementById('email-container').classList.add('focus')
                        }}
                        onBlur={() => {
                          if (values.name.length === 0) {
                            document.getElementById('email-container').classList.remove('focus')
                            document.getElementById('email-container').classList.add('blur')
                          }
                        }}
                        onChange={handleTextChange} id="email" type="text" className="input" />
                    </div>
                  </div>
                  <div id="username-container" className={`input-div one `}>
                    <div className="i">
                        <FontAwesomeIcon className="login-icons" icon={faUser} />
                    </div>
                    <div className="div">
                        <h5>Username</h5>
                        <input onFocus={() => {
                          document.getElementById('username-container').classList.remove('blur')
                          document.getElementById('username-container').classList.add('focus')
                        }}
                        onBlur={() => {
                          if (values.name.length === 0) {
                            document.getElementById('username-container').classList.remove('focus')
                            document.getElementById('username-container').classList.add('blur')
                          }
                        }}
                        onChange={handleTextChange} id="name" type="text" className="input" />
                    </div>
                  </div>
                  <div id="password-container" className={`input-div pass `}>
                    <div className="i">
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
                  <a href="/login">Already signed in?</a>
                  <input type="submit" className="btn" value="Signup" />
            </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signup;
