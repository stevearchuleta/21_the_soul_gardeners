import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateError':
      return { ...state, errors: action.value };
    default:
      return;
  }
};

const initialState = { errors:  []};

const ErrorContext = React.createContext(initialState);

function ErrorProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ErrorContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ErrorContext.Provider>
  );
}

export { ErrorContext, ErrorProvider };