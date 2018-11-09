import { VisibilityFilters, ADD_TODO, ADD_TODOs, Login, Logout, username,token } from './Action';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  isAuthenticated: false,
  visible: true,
  token:'',
  username: '',
  token: '',
  api_key_ghn: '5b9cc06394c06b624c586416',
}
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(initialState);
      return state;
    case ADD_TODOs:
      var object = action.value;
      return Object.assign({}, state, {
        dataSource: [
          ...state.dataSource,
          object
        ]
      })
    case Login:
      return Object.assign({}, state, {
        isAuthenticated: true
      })
    case Logout:
      console.log('Logout');
      return Object.assign({}, state, {
        isAuthenticated: false
        
      })
    case username:
      return Object.assign({}, state, {
        username: action.name
      })
    case token:
    return Object.assign({},state,{
        token:action.value
    });
    default:
      return initialState;
  }

}
export default todoApp;