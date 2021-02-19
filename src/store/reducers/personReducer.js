import {UPDATE_PERSON} from  './../actions/personActions';

const personReducer = (state={},{type,payload}) => {
  // console.log('actions',actions);

  switch (type) {
    case UPDATE_PERSON:
      // here only name is changed and email is preserved
      // what if there is id, email, address ....
      // return {name:payload,email:state.email};

      return Object.assign({},state,{name:payload}); // will preserved all the data
      
      default:
      return state;
  }
};



export default personReducer;