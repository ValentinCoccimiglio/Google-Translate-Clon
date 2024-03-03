import { State } from '../types'

const initialState = {
    fromLanguage:'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
  function reducer (state: State, action) {
    const {type, payload} = action
  
    if (type === 'INTERCHANge_LANGUAGES') {
      return {
        ... state,
        fromLanguage: state.toLagnuage,
        toLagnuage: state.fromLanguage
      }
    }
  
    if (type === 'SET_FROM_LANGUAGE'){
      return {
        ... state,
        fromLanguage: action.payload
      }
    }
  
    if (type === 'SET_TO_LANGUAGE') {
      return{
        ... state,
        toLanguage: action.payload
      }
    }
  
    if (type === 'SET_FROM_TEXT') {
      return{
        ... state,
        loading: true,
        fromText: action.payload,
        result: ''
      }
    }
  
    if (type === 'SET_RESULT') {
      return {
        ... state,
        loading: false,
        result: action.payload
      }
    }
  
    return state
  
  }

  export function useStore () {
    const [{
        fromLanguage
    }, dispatch] = useReducer(reducer, initialState)
    const [state, dispatch] = useReducer (reducer, initialState)
  
  }