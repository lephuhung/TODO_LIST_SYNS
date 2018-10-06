import {connect} from 'react-redux';
import {axios} from 'axios';
const login_function=props=>{
    
    axios.post('/api/login', {
        email: 'Test@gmail.com',
        password: '123456'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
}
const mapStateToProps = state => ({
    //todos: getVisibleTodos(state.todos, state.visibilityFilter)
    state: state
  })
  const mapDispatchToProps = dispatch => ({
    //toggleTodo: id => dispatch(toggleTodo(id))
    dispatch: dispatch
  })
  export default connect(mapStateToProps,mapDispatchToProps)(login_function)