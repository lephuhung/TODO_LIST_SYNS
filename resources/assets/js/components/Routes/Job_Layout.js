import React from 'react';
import { connect } from 'react-redux';
import { Row, Col,Card } from 'antd';
import Breadcum from '../Components/Breadcum';
import DataTable from '../Components/DataTable';
import SubmitForm from '../Components/SubmitForm';
import FormKhachHang from '../Components/FormKhachHang';
class Job_Layout extends React.Component {

    render() {
        return (
            <div>
                <Row gutter={16} style={{ padding: '30px' }}>

                    <Col span={8}>
                        <Card title="Thông tin khách hàng" bordered={false}>
                            <FormKhachHang />
                        </Card>
                    </Col>
                    <Col span={16} >
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