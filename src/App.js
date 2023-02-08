import './App.css';

import { useState } from 'react';

function App() {

  const [ans, setAns] = useState('') 

  const apiTest = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=1`)
    .then((datos)=>{ return datos.json(); })
    .then((resp)=>{ console.log(resp.results); 
                    setAns(JSON.stringify(resp.results));
                  })
    
  }

  return (
    <div className="App">
      <button onClick={apiTest} >Query</button>
      <p>{ans}</p>
    </div>
  );
}

export default App;
