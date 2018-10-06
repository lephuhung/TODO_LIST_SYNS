import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import axios from 'axios';
import {LogoutState } from '../Redux/Action';
class Logout_Layout extends React.Component {
    constructor(props){
        super(props);
        this.state={
            visible:true
        }
    }
    componentDidMount(){
        
        axios.post('/api/logout', {'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTUzODY0MTA3NCwiZXhwIjoxNTM4NjQ0Njc0LCJuYmYiOjE1Mzg2NDEwNzQsImp0aSI6ImdFVEtidEVsRVpmNWs2aGciLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.HVLGO_XZDriuc2-0NexB__PxOcI6IadIDF8CS0Qok4g'})
          .then((response) => {
            console.log(response);
            this.setState({visible:false});
            this.props.dispatch(LogoutState());
            //this.props.history.push('/login');
          })
          .catch(function (error) {
            console.log(error);
          })
          console.log(this.props.state);
      }
    
    render() {
        return (
            <div>
               {this.state.visible===true? <h1>Chúng tôi đang chuyển hướng cho bạn </h1>:<h1>Cảm ơn bạn đã sử dụng</h1>}
            </div>
        );

    }
}
const mapStateToProps = state => ({
    state: state
})
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(Logout_Layout);''