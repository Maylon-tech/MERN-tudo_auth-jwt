import { useState, useEffect } from "react"
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    alert("User Logged almost successfully.....")

  }

  return (
    <>
    <section className="heading">
      <h1>l
        <FaSignInAlt /> Login
      </h1>
      <p>Login and start setting tasks.</p>
    </section>
    
    <section className="form">
      
      <form onSubmit={onSubmit}>
        
        <div className="form-group">
          <input 
            type="text" 
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={onChange}
          />
        </div>
        
        <div className="form-group">
          <button type="submit" className="btn bnt-block">
              Submit
          </button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login
