import React from 'react';
import { AnyForm } from './anyform/index';
import { Input } from './anyform/index';

function App() {
  return (
    <div className="App">
      <AnyForm>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </AnyForm>
    </div>
  );
}

export default App;
