import React from 'react';
import './style.css';


const login = () => {
  return(
    <div className="card item login">
      <div className="card-header">
        <div>REGISTER or... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</div>
      </div>

      <form action="http://localhost:3001/auth/local" className="form reg-form" method="POST">
         
          <div className="form-item register">
            <input type="text" className="form-input"
            placeholder="   Name:"
            aria-label="Name"/>
            
          </div>

          <div className="form-item email">
            <input type="email:" className="form-input"
            placeholder="   emaiil:" aria-label="email"/>
          </div>
          
          <div className="form-item password">
            <input type="text" className="form-input"
            placeholder="   password:"
            aria-label="Name"/>
            
          </div>

          <div className="form-item confirm-password">
            <input type="confirm-password" className="form-input"
            placeholder="   confirm password:" aria-label="email"/>
          </div>

          <button className="form-button reg-btn" type="submit"> register </button>

        </form>

        <form action="http://localhost:3001/auth/local" className="form reg-form" method="POST">
         

          <div className="form-item email">
            <input type="email" className="form-input"
            placeholder="   emaiil:" aria-label="email"/>
          </div>
          
          <div className="form-item password">
            <input type="text" className="form-input"
            placeholder="   password:"
            aria-label="Name"/>
            
          </div>

          <button className="form-button reg-btn" type="submit"> login </button>

        </form>
    </div>
  )
}


export default login
