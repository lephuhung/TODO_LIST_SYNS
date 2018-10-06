import React, { Component } from 'react';
import 'antd/dist/antd.css';
import RouteLayout from '../Routes/index';
import {connect} from 'react-redux';
const { Header, Content, Footer, Sider } = Layout;
import Slider_Layout from '../Components/Slider_Layout';
import { Layout} from 'antd';
import Header_Layout from '../Components/Header_Layout';
import {Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Todo from './Todo_Layout';
import Job from './Job_Layout';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
      collapsed: true,

    }

  }
  render() {
    console.log('Home', this.props);
    return (
          <Layout style={{ minHeight: '100vh' }}>
          <Slider_Layout />
          <Layout>
            <Header_Layout />
            <Content style={{ margin: '0 16px' }}>
            <Switch>
                <PrivateRoute exact path="/" component={Todo} />
                <PrivateRoute exact path="/job" component={Job} />
            </Switch>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
          </Footer>
          </Layout>
        </Layout>
       
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
const Ex = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Ex;
