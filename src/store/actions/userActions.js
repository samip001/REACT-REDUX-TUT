export const UPDATE_USER = 'UPDATE_USER';

// const update_user = {type:UPDATE_USER,payload:"User Goes here"};
// export default update_user;

const fetch_users = (dispatch) =>{
    fetch('https://reqres.in/api/users')
        .then(res=> res.json())
        .then(res=> dispatch({type:UPDATE_USER,payload:res.data}));
}

export default fetch_users;