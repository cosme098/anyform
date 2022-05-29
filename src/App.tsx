import React from 'react';
import { AnyForm } from './anyform/anyform';

function teste1(value: any): void {
  console.log(value);
}
function teste2(value: any): void {
  console.log(value);
}

function App() {
  return (
    <div className="App">
      <AnyForm
        onSuccess={teste1}
        onFailed={teste2}>
        <input name='teste1' placeholder="Name" required={true} />
        <input name='teste2' placeholder="Password" />
      </AnyForm>
    </div>
  );
}

export default App;
