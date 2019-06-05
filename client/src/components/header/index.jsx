import React, { useContext } from "react";
import "./style.css";
import { UserContext, UserProvider } from "../../utilities/userContext";
import { ErrorContext, ErrorProvider } from "../../utilities/errorContext";
// import { Redirect } from 'react-router-dom';

const header = () => {
  const { state, dispatch } = useContext(UserContext);
  // const { xxxxx, dispatch } = useContext(ErrorContext);
  console.log("TestingState" + state);

  return (
    <div className="item header">
      <div>
        <h1 className="header-text-1">Gardening The Soul...</h1>
        <h1 className="header-text-2">As Well As The Soil</h1>

          <div>
            <h1 className="reg-message log-message welcome-message">
              {state.currentUser !== null && state.currentUser.name !== ""
                ? `Welcome ${state.currentUser.name}`
                : ``}
            </h1>
            
            {/* <div>
            { errors.length > 0 ? errors.map((err) => (
            <h1>{err.msg}</h1>)) : ``
            }
            </div> */}

        </div>
      </div>
    </div>
  );
};

export default header;
