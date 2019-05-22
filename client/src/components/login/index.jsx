import React from 'react';
import './style.css';


const login = () => {
  return(
    <div className="card item login">
      <div className="card-header">
        <div>REGISTER or... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</div>
      </div>

      <form action="http://localhost:3001/auth/local" class="form" method="POST">
         
          <div className="form-item">
            <input type="text" class="form-input"
            placeholder="userName"
            aria-label="userName"/>
            
          </div>

          <div className="form-item">
            <input type="password" class="form-input"
            placeholder="password" aria-label="password"/>
          </div>

          <button className="form-button" type="submit">login</button>

        </form>

    </div>
  )
}


export default login
