import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Breadcum from '../Components/Breadcum';
import DataTable from '../Components/DataTable';
import SubmitForm from '../Components/SubmitForm';
class Job_Layout extends React.Component {

    render() {
        return (
            <div>
                <Breadcum />
                <Row>
                    <Col span={8}>
                    <SubmitForm/>
                    </Col>
                    <Col span={16} >
                    <DataTable/>
                    </Col>
                </Row>

                
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Job_Layout);