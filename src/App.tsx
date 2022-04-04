import React from 'react';
import { AnyForm } from './anyform/index';

function teste1(value: any): void {
  console.log(value);
}

function App() {
  return (
    <div className="App">
      <AnyForm
        onSuccess={teste1}>
        <input name='teste' required={true} placeholder="Name" />
        <input name='teste1' placeholder="Password" />
        <input name='test2' placeholder="Email" />
      </AnyForm>
    </div>
  );
}

export default App;
