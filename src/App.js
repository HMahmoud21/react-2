import './App.css';
import React ,{component} from 'react';
import profile from "./Component/profile/ProfilePhoto"
import add  from './Component/profile/add';
import name from './Component/profile/Fullname'

function App() {
  return (
    <div className="App">
      <profile></profile>
      <add> </add>
      <name></name>


    </div>
  );
}

export default App;
