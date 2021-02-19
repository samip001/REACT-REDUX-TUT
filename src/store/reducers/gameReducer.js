
import {UPDATE_GAME} from './../actions/gameActions';

// actions can be destructured into type and payload
const gameReducer = (state={},{type,payload})=>{
  switch (type) {
    case UPDATE_GAME:
      return {name:payload};
  
    default:
      return state;
  }
}

export default gameReducer;