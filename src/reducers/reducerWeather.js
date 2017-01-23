import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
    return [ action.payload.data, ...state ]
  }
  return state
}

//we dont want to manipulate our existing array so we dont do something like
//state.push(action.payload.data)
//we want a new array each time
