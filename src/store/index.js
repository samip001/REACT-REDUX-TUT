import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import personReducer from './reducers/personReducer';
import gameReducer from './reducers/gameReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

// combined reducers
const AllReducers = combineReducers({person:personReducer,game:gameReducer,users:userReducer});

// initial state for game and person reducer.
const InitialState = {
  person:{name:'Samip',email:"samip@gmail.com",address:'KTM'},
  game:{name:'Cricket'},
  users: []
}

const middleware = [thunk]
const store = createStore(AllReducers,
  InitialState, 
  compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;
