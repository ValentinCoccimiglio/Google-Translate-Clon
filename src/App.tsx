import { useReducer } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { act } from 'react-dom/test-utils';
import { useStore } from './hooks/useStore';

function App(){
  const { fromLanguage, setFromLanguage } = useStore()

  return (
      <div>
        <h1>Google Translate</h1>
        <button onClick={()=> 
        setFromLanguage('es')}> CANBIAR A ESPAÑOL</button>
        {fromLanguage}
      </div>
  )
}

export default App
