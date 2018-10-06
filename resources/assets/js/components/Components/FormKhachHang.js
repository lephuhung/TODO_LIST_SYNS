import React from 'react'
import { Form, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class FormKhach extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <Form >
                <FormItem
                    label="Tên Khách Hàng"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 17 }}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Nhập mã đơn hàng!' }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem
                    label="Gender"
                    //labelCol={{ span: 5 }}
                    //wrapperCol={{ span: 5 }}
                >
                <span>
                    {getFieldDecorator('gender', {
                        rules: [{ required: true, message: 'Please select your gender!' }],
                    })(
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={this.handleSelectChange}
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </Select>
                    )}
                    <Input
                            type="text"
                            placeholder='Số điện thoại'
                            onChange={this.handleNumberChange}
                            style={{ width: '65%', marginRight: '3%' }}
                        />
                    </span>
                </FormItem>
                <FormItem>
                    <span>
                        <Input
                            type="text"

                            onChange={this.handleNumberChange}
                            style={{ width: '65%', marginRight: '3%' }}
                        />
                        <Select
                            
                            style={{ width: '32%' }}
                        >
                            <Option value="rmb">RMB</Option>
                            <Option value="dollar">Dollar</Option>
                        </Select>
                    </span>
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 12, offset: 5 }}
                >
                    <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                        Submit
                  </Button>
                </FormItem>
            </Form>
        );
    }
}
const mapStateToProps = state => ({
    state: state
})
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})
const FormKhachHang = Form.create()(FormKhach);
export default FormKhachHang;
