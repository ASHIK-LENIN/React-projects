import React from 'react'
import { useState } from 'react'

function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const saveData = ( e) =>{
    e.preventDefault();
    let data = {  email, password }
    console.log(data);

    fetch('https://student-auth.vercel.app/login', {
    mode:'cors',
    method: 'POST',

    headers: {
      
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

  })

  };

  


  return (
    <>
    
    <div className="container">
    <h1>Login</h1>
    <form>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control"  value={email} onChange={(e) => { setEmail(e.target.value) }}/>
    <label className="form-label" htmlFor="form2Example1" >Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
     
    </div>

    <div className="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" className="btn btn-primary btn-block mb-4" onClick={saveData}>Sign in</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">
    <p>Not a member? <a href="signup">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
</div>
    </>
  )
}

export default Login