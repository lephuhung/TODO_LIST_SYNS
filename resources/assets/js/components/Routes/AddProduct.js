import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import './todo.css';
import { Col, Row, Button, Form, FormGroup, ButtonGroup, Label, Input, InputGroup, InputGroupAddon, FormText } from 'reactstrap';
class Add_product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            imageupload: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileupload = this.fileupload.bind(this)
        this.createImage = this.createImage.bind(this);
    }
    onFormSubmit() {
        console.log('hihi');
        this.fileupload(this.state.imageupload);
    }
    onChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.setState({ image: URL.createObjectURL(event.target.files[0]) });
        this.createImage(files[0]);
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
        const formData = { 'file': this.state.imageupload }
        return axios.post(url, { 'file': image }, { headers: { "Authorization": `Bearer ${this.props.state.token}` } })
            .then(res => {
                if (res.status === 200) {
                    console.log('Thành công', res.data);
                } else {
                    console.log('lỗi');
                }
            }).catch((e) => {
                console.log(e);
            });

    }
    render() {
        console.log(process.env.PUBLIC_URL);
        return (
            <div style={{ paddingTop: '30px' }}>

                <Card >
                    <Form>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleEmail" size="14px" color="primary"><h6>Tên sản phẩm</h6></Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Tên sản phẩm" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword"><h6>Nhãn hiệu</h6></Label>
                                    <Input type="select" name="select" id="exampleSelect" placeholder="Vui lòng chọn">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword"><h6>Đơn vị</h6></Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleEmail" ><h6>Danh mục</h6></Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword"><h6>Danh mục con</h6></Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePassword" style={{ font: 'bold' }}><h6>Số lượng</h6></Label>
                                    <Input type="text" name="select" id="exampleSelect">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleCity"><h6>Giá tiền</h6></Label>
                                    <Input type="text" name="city" id="exampleCity" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleState" ><h6>Thuế/Giá trị gia tăng</h6></Label>
                                    <InputGroup>
                                        <Input type="text" name="state" id="exampleState" />
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
                            <Col sm={4}>
                                <InputGroup>
                                    <Input type="file" name="file" id="exampleFile" onChange={this.onChange} />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <img src={this.state.image} />
                        </Row>

                        <ButtonGroup style={{ marginTop: '20px' }}>

                            <Button color='success' onClick={() => this.onFormSubmit()}>Lưu</Button>
                            <Button color='primary'>Lưu và thêm sản phẩm mới</Button>
                            <Button>Hủy</Button>
                        </ButtonGroup>
                        <img src='/storage/images/1541345242.jpeg' />
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