import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Avatar,Row, Col } from 'antd';
import { connect } from 'react-redux';
const FormItem = Form.Item;
import './login.css'
import Login_fuc from '../Fuction/Login';
import axios from 'axios';

import {LoginState,setusername } from '../Redux/Action';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      error:''
    }
    this.Login = this.Login.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(this.props);
        axios.post('/api/login', values)
          .then((response) => {
            if (response.status === 200) {
              this.props.dispatch(LoginState());
              this.props.dispatch(setusername(response.data.user.email));
              this.props.history.push('/');
              localStorage.setItem('isAuthencate', true);
              console.log(response.data.token);
            }
            if(response.status===400){
                this.setState({error:'Sai thông tin đăng nhập'});
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    });
  }
  componentDidMount() {
    if (this.props.state.isAuthenticated === true) {
      this.props.history.push('/');
      return;
    }
  }
  Login() {

  }
  responseFacebook(response){
    console.log(response);
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
        <Row>
        <Col span={8}>
        <h1>{this.state.error}</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            <Avatar size={64} icon="user" className='avatar' />
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )} */}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
            Or <a href="/register">register now!</a>
          </FormItem>
          
        </Form>
        </Col>
        <Col span={16}>
        </Col>
        </Row>
      
    );
  }



}
const WrappedHorizontalLoginForm = Form.create()(Login);

const mapStateToProps = state => ({

  state: state
})
const mapDispatchToProps = dispatch => ({

  dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(WrappedHorizontalLoginForm);
