import React from 'react'
import './signup.css'
import { useState } from 'react'



function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const saveData = (e) => {
    e.preventDefault();
    let data = { name, email, password }
    // console.log(data);


    // fetch('https://student-auth.vercel.app/register', {
    //   mode: 'cors',
    //   method: 'POST',

    //   headers: {

    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);

    //   })


    axios
    .post('https://student-auth.vercel.app/register',{
      
    })

  };

  return (
    <>

      <div className="container">
        <form >
          <h1 style={{ color: "blue", fontFamily: "serif" }}>Signup Form</h1>
          <br />
          <br />
          <br />
          {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form3Example1" className="form-control" name='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                <label className="form-label" htmlFor="form3Example1"  >Name</label>
              </div>
            </div>

            <div className="col">
              <div className="form-outline">
                <input type="text" id="form3Example2" className="form-control" />

                <label className="form-label" htmlFor="form3Example2" >User name</label>
              </div>
            </div>
          </div>

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="password" id="form3Example4" className="form-control" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>



          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4" onClick={saveData}>Sign up</button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>Already Sign-in :<a href="login">Sign-in</a></p>

          </div>
        </form>
      </div>


    </>
  )
}

export default Signup