import React from 'react'
import { connect } from 'react-redux';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Todo from './Todo_Layout';
import Job from './Job_Layout';
import Login from './Login_Layout';
import PrivateRoute from './PrivateRoute';
class RouteIndex extends React.Component {

    render() {
        return (
            <BrowserRouter>
            <div>
                <PrivateRoute   exact path="/home" component={Todo} />
                <PrivateRoute exact path="/job" component={Job} />
            </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => ({
    //todos: getVisibleTodos(state.todos, state.visibilityFilter)
    state: state
})
const mapDispatchToProps = dispatch => ({
    //toggleTodo: id => dispatch(toggleTodo(id))
    dispatch: dispatch
})
export default RouteIndex;
