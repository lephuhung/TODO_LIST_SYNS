import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import FormKhachHang from '../Components/FormKhachHang';
class Kiemtradonhang_Layout extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <Row gutter={24} style={{ padding: '30px' }}>
 
                    <Col span={8}>
                        <Card title="Nhập đơn hàng" bordered={false}>
                            <h1>{this.props.match.path}</h1>
                        </Card>
                    </Col>
                    <Col span={16} >
                    <Row gutter={16} style={{ paddingBottom: '30px' }}>
                        <Card title="Thông tin đơn hàng" bordered={false} style={{ paddingBottom: '30px' }}>

                        </Card>
                    </Row>
                    <Row gutter={16} style={{ paddingBottom: '30px' }}>
                        <Card title="Trạng thái đơn hàng" bordered={false} style={{ paddingBottom: '30px' }}>

                        </Card>
                    </Row>
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