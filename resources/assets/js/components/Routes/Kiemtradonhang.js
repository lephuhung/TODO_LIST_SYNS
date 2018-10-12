import React from 'react';
import { connect } from 'react-redux';
import { Row, Col,Card } from 'antd';
import FormKhachHang from '../Components/FormKhachHang';
class Kiemtradonhang_Layout extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <Row gutter={16} style={{ padding: '30px' }}>

                    <Col span={8}>
                        <Card title="Thông tin khách hàng" bordered={false}>
                        <h1>{this.props.id}</h1>
                        </Card>
                    </Col>
                    <Col span={16} >
                    <Card title="Thông tin đơn hàng" bordered={false}>
                            
                        </Card>
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
export default connect(mapStateToProps, mapDispatchToProps)(Kiemtradonhang_Layout);