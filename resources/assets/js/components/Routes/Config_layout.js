import React from 'react';
import { Form } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';


class Config extends React.Component {
  constructor(props) {
    super(props);
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
           
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    });
  }
  componentDidMount() {
    
    
  }
  Login() {

  }
  responseFacebook(response){
    console.log(response);
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='body'>

      </div>
    );
  }



}
const WrappedHorizontalLoginForm = Form.create()(Config);
const mapStateToProps = state => ({
  state: state
})
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(WrappedHorizontalLoginForm);
