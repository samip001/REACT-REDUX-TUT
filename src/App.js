import './App.css';
import update_name from './store/actions/personActions';
import update_game from './store/actions/gameActions';
import fetch_users from './store/actions/userActions';
import { connect } from 'react-redux';

// function updatePerson() {
//   store.dispatch(update_name);
// }

// function updateGame() {
//   store.dispatch(update_game);
// }
function App(props) {
  console.log(props);
  
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
      Person Name: {props.person.name}
      <br />
      <button onClick={props.updatePerson}>Update Person</button>
      <br />
      Game Name: {props.game.name}
      <br />
      <button onClick={props.updateGame}>Update Game</button>
      <br />
      Users: 
      <br />
      <button onClick={props.fetchUsers}>Fetch Users</button>
      {
        props.users.length === 0 ? <p>No User Found</p>:
        props.users.map((user,index)=> <p key={user.id}>{user.id}- {user.first_name} {user.last_name}</p>)
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
    person:state.person,
    users: state.users
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGame:() => dispatch(update_game),
    updatePerson: () => dispatch(update_name),
    fetchUsers:() => dispatch(fetch_users)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
