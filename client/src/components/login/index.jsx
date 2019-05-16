import React from 'react';
import './style.css';


const login = () => {
  return(
    <div className="card item login">
      <div className="card-header">
        <div>REGISTER or... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</div>
      </div>

      <form action="#" class="form">
          <div className="form-item">
            <input type="text" class="form-input"
            placeholder="first name"
            aria-label="first name"/>
            
          </div>

          <div className="form-item">
            <input type="email" class="form-input"
            placeholder="email" aria-label="email"/>
          </div>

          <button className="form-button" type="submit">register</button>

        </form>

        <form action="#" class="form">
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
