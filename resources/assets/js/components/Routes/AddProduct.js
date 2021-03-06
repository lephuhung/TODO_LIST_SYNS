import React from 'react';
import { connect } from 'react-redux';
import { Card, message } from 'antd';
import './todo.css';
import { Col, Row, Button, Form, FormGroup, ButtonGroup, Label, Input, InputGroup, InputGroupAddon, FormText } from 'reactstrap';
class Add_product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            imageupload: '',
            productname: '',
            unit_id: '',
            type: '',
            brand_id: '',
            category_id: '',
            sub_category_id: '',
            create_by: '',
            number:'',
            price:'',
            percent:''

        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileupload = this.fileupload.bind(this)
        this.createImage = this.createImage.bind(this);
    }
    onFormSubmit() {
        this.fileupload(this.state.imageupload);
        console.log(this.state);
    }
    onChange(e) {
        if (e.target.name === 'file') {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.setState({ image: URL.createObjectURL(event.target.files[0]) });
            this.createImage(files[0]);
        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }
    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                imageupload: e.target.result
            })
        };
        reader.readAsDataURL(file);
    }

    fileupload(image) {
        const url = 'http://localhost:8000/api/add-product';
        return axios.post(url, { 'productname':this.state.productname,'file': image, unit_id:this.state.unit_id,
                                type:this.state.type, brand_id:this.state.brand_id,number:this.state.number,price:this.state.price,
                                percent:this.state.percent,
                                category_id:this.state.category_id, sub_category_id:this.state.sub_category_id,
                                
    
    }, { headers: { "Authorization": `Bearer ${this.props.state.token}` } })
            .then(res => {
                if (res.status === 200) {
                    message.success('Processing complete!')
                } else {
                    message.warning('Processing fail!')
                }
            }).catch((e) => {
                console.log(e);
            });
        console.log(this.state);

    }
    render() {
        return (
            <div style={{ paddingTop: '30px' }}>

                <Card >
                    <Form>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleEmail" size="14px" color="primary"><h6>Tên sản phẩm</h6></Label>
                                    <Input type="email" name="productname" id="exampleEmail" placeholder="Tên sản phẩm" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword"><h6>Nhãn hiệu</h6></Label>
                                    <Input type="select" name="brand_id" id="exampleSelect" onChange={this.onChange}>
                                        <option value="0"> Vui lòng lựa chọn</option>
                                        <option value="1">Apple</option>
                                        <option value="2">Lenovo</option>
                                        <option value="3">China</option>
                                        <option value="4">Việt Nam</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword"><h6>Đơn vị</h6></Label>
                                    <Input type="select" name="unit_id" id="exampleSelect" onChange={this.onChange}>
                                        <option value="0"> Vui lòng lựa chọn</option>
                                        <option value="1">Chiếc</option>
                                        <option value="2">gram</option>
                                        <option value="3">Hộp</option>
                                        <option value="4">Vỉ/Lốc</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleEmail" ><h6>Danh mục</h6></Label>
                                    <Input type="select" name="category_id" id="exampleSelect" onChange={this.onChange}>
                                        <option value="0"> Vui lòng lựa chọn</option>
                                        <option value="1">Đồ điện tử</option>
                                        <option value="2">Đồ may mặc</option>
                                        <option value="3">Đồ ăn</option>
                                        <option value="4">Thuốc</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword"><h6>Danh mục con</h6></Label>
                                    <Input type="select" name="sub_category_id" id="exampleSelect" onChange={this.onChange}>
                                        <option value="0"> Vui lòng lựa chọn</option>
                                        <option value="1">Máy tính</option>
                                        <option value="2">Điện thoại</option>
                                        <option value="3">Quần dài</option>
                                        <option value="4">Áo cộc tay</option>
                                        <option value="5">Thuốc viên</option>
                                        <option value="6">Thuốc hòa tan</option>
                                        <option value="7">Thiết bị ngoại vi</option>
                                        <option value="8">Áo khoác</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword" style={{ font: 'bold' }}><h6>Số lượng</h6></Label>
                                    <Input type="text" name="number" id="exampleSelect" onChange={this.onChange}>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleCity"><h6>Giá tiền</h6></Label>
                                    <Input type="text" name="price" id="exampleCity" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleState" ><h6>Thuế/Giá trị gia tăng</h6></Label>
                                    <InputGroup>
                                        <Input type="text" name="percent" id="exampleState" onChange={this.onChange}/>
                                        <InputGroupAddon addonType="prepend">%</InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleZip"><h6>Giá sản phẩm sau thuế</h6></Label>
                                    <InputGroup>
                                        <Input type="text" name="zip" id="exampleZip" />
                                        <InputGroupAddon addonType="prepend">VNĐ</InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleCity"><h6>Loại hàng</h6></Label>
                                    <Input type="select" name="type" id="select_type" onChange={this.onChange}>
                                        <option value="single">Hàng đơn</option>
                                        <option value="variable">Hàng theo số lượng</option>

                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <InputGroup>
                                    <Label for="exampleZip"><h6>Hình ảnh mặt hàng</h6></Label>
                                    <Input type="file" name="file" id="exampleFile" onChange={this.onChange} />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <img src={this.state.image} />
                        </Row>

                        <ButtonGroup style={{ marginTop: '20px' }}>

                            <Button color='success' onClick={() => this.onFormSubmit()}> Lưu </Button>
                            <Button color='primary'> Lưu và thêm sản phẩm mới </Button>
                            <Button> Hủy </Button>
                        </ButtonGroup>
                      
                    </Form>
                </Card>

            </div >
        );

    }
}
const mapStateToProps = state => ({
    state: state
})
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(Add_product);