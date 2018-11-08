import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import FormKhachHang from '../Components/FormKhachHang';
import { Table, Divider, Tag } from 'antd';
import { addTodos } from '../Redux/Action'
class List_product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }
    componentDidMount() {
        const url = 'http://localhost:8000/api/list-product';
        return axios.post(url, { business_id: '1' }, { headers: { "Authorization": `Bearer ${this.props.state.token}` } })
            .then(res => {
                if (res.status === 200) {
                    this.setState({ dataSource: res.data });
                } else {
                    console.log('lỗi');
                }
            }).catch((e) => {
                console.log(e);
            });
        console.log(this.state);
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <Row gutter={16} style={{ padding: '30px' }}>
                    <Card title="Danh sách sản phẩm" bordered={false}>
                        <Table dataSource={this.state.dataSource[0]} columns={this.props.state.columns}/>
                           
                    </Card>
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