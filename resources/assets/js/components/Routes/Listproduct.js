import React from 'react';
import { connect } from 'react-redux';
import { Row, Col,Card } from 'antd';
import FormKhachHang from '../Components/FormKhachHang';
class List_product extends React.Component {

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
                    <Card title="Thông tin đơn hàng" bordered={false}>
                            
                        </Card>
                    </Col>
                </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(List_product);