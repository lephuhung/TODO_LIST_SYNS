import React from 'react';
import { Table } from 'antd';
import {connect} from 'react-redux';

class DataTable extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Table columns={this.props.state.columns} dataSource={this.props.state.dataSource} />
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(DataTable);
