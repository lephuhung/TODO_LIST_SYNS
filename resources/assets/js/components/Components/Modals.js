import React from 'react';
import {Modal,Button} from 'antd';
import {connect} from 'react-redux';
import { ADD_TODOs, addTodos, vissible } from '../Redux/Action';
class Modals extends React.Component{
constructor(props){
    super(props);
    this.state={
        visible:false
    }
    this.showModal=this.showModal.bind(this);
    this.hideModal=this.hideModal.bind(this);
    
}

showModal(){
    this.setState({
      visible: true,
    });
  }

  hideModal(){
    this.props.dispatch(vissible());
  }
render(){
    return(
        <Modal
          title="Modal"
          visible={this.props.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="OK"
          cancelText='Cancel'
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
    );
}
}
const mapStateToProps = state => ({
    //todos: getVisibleTodos(state.todos, state.visibilityFilter)
    state:state
  })
const mapDispatchToProps = dispatch => ({
    //toggleTodo: id => dispatch(toggleTodo(id))
    dispatch:dispatch
  })
export default connect(mapStateToProps,mapDispatchToProps)(Modals);
