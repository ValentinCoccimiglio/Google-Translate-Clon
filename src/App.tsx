import { useReducer } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { act } from 'react-dom/test-utils';

function App(){
  const [
    {
      fronLanguage,
      toLagnuage,
      fronText,
      result,
      loading
    }, dispatch] = useReducer(reducer, initialState)
  const [state, dispatch] = useReducer (reducer, initialState)

  return (
      <div>
        <h1>Google Translate</h1>
        <button onClick={()=> 
        dispatch({type: ' SET_FROM_LANGUAGE', payload: 'es'})}> CANBIAR A ESPAÑOL</button>
      </div>
  )
}

export default App
