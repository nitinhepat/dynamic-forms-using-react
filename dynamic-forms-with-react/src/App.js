import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './containers/form/form';

function App() {
  return (
    <div className="form-wrapper">
      <div>
        <strong> ENTER USER DETAILS</strong>
      </div>
      <Form />
    </div>
  );
}

export default App;
