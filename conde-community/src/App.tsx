import React from 'react';
import './App.css';

interface Parson  {
  name:string,
  age:number
}

function App() {

 

  let obj = {
    name:'1',
    age:18
  }

  let greeter = (obj:Parson)=>{
    return obj.name + obj.age
  }

  return (
    <div >
      {123}
    </div>
  );
}

export default App;
