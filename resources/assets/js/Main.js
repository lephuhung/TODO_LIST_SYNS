import React, { Component } from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import './app.css';
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider_Layout from './components/Components/Slider_Layout';
import Header_Layout from './components/Components/Header_Layout';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { persistor, store } from './components/Redux/store';
import Login from './components/Routes/Login_Layout';
import PrivateRoute from './components/Routes/PrivateRoute';
import Todo from './components/Routes/Todo_Layout';
import Job from './components/Routes/Job_Layout';
import Config from './components/Routes/Config_layout';
import Register from './components/Routes/Register_Layout';
import Logout from './components/Routes/Logout_Layout';
import { PersistGate } from 'redux-persist/integration/react';
import Kiemtradonhang from './components/Routes/Kiemtradonhang';
import Add_product from './components/Routes/AddProduct';
import List_product from './components/Routes/Listproduct';
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
      collapsed: true,
    }
  }
  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <PrivateRoute exact path={'/logout'} isAuthenticated={this.props.state.isAuthenticated} component={Logout} />
            <Route
              path="/"
              render={({ match: { url } }) => (
                <div>
                  <Layout style={{ minHeight: '100vh' }}>
                    <Slider_Layout />
                    <Layout>
                      <Header_Layout />
                      <Content style={{ margin: '0 16px' }}>
                        <PrivateRoute exact path={`${url}`} isAuthenticated={this.props.state.isAuthenticated} component={Todo} />
                        <PrivateRoute exact path={`${url}job`} isAuthenticated={this.props.state.isAuthenticated} component={Job} />
                        <PrivateRoute exact path={`${url}cau-hinh`} isAuthenticated={this.props.state.isAuthenticated} component={Config} />
                        <PrivateRoute exact path={`${url}ghtk`} isAuthenticated={this.props.state.isAuthenticated} component={Kiemtradonhang} />
                        <PrivateRoute exact path={`${url}ghn`} isAuthenticated={this.props.state.isAuthenticated} component={Kiemtradonhang} />
                        <PrivateRoute exact path={`${url}viettel-post`} isAuthenticated={this.props.state.isAuthenticated} component={Kiemtradonhang} />
                        <PrivateRoute exact path={`${url}add-product`} isAuthenticated={this.props.state.isAuthenticated} component={Add_product} />
                        <PrivateRoute exact path={`${url}list-product`} isAuthenticated={this.props.state.isAuthenticated} component={List_product} />
                      </Content>
                      <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                         </Footer>
                    </Layout>
                  </Layout>

                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
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
const Ex = connect(mapStateToProps, mapDispatchToProps)(Example);

if (document.getElementById('example')) {

  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Ex />
      </PersistGate>
    </Provider>
    , document.getElementById('example'));
}
