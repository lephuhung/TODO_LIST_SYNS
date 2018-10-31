import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import './todo.css';
import { Col, Row, Button, Form, FormGroup, ButtonGroup, Label, Input, InputGroup, InputGroupAddon, FormText } from 'reactstrap';
class Add_product extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            image: ''
          }
          this.onFormSubmit = this.onFormSubmit.bind(this)
          this.onChange = this.onChange.bind(this)
          this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault() 
        this.fileUpload(this.state.image);
      }
      onChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
              return;
        this.setState({image:URL.createObjectURL(event.target.files[0])});
      }
      createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
            image: e.target.result
          })
        };
        reader.readAsDataURL(file);
      }
      fileUpload(image){
          console.log(this.state.image);
        // const url = 'http://localhost:8000/api/fileupload';
        // const formData = {file: this.state.image}
        // return  post(url, formData)
        //         .then(response => console.log(response))
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
                        <img src={this.state.image}/>
                        </Row>

                        <ButtonGroup style={{ marginTop: '20px' }}>
                            <Button color='success' onClick={()=>this.onFormSubmit}>Lưu</Button>
                            <Button color='primary'>Lưu và thêm sản phẩm mới</Button>
                            <Button>Hủy</Button>
                        </ButtonGroup>
                       
                    </Form>
                </Card>

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
//const WrappedTimeRelatedForm = Form.create()(Add_product);

export default connect(mapStateToProps, mapDispatchToProps)(Add_product);