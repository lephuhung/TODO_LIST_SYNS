import React from 'react'
import { Form, Input, Select, Button, Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class FormKhach extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form >
                <FormItem
                    label='Tên Khách hàng'
                >
                    <span>
                        <Input
                            type="text"
                            placeholder='Họ Tên'
                            onChange={this.handleNumberChange}
                            style={{ width: '65%', marginRight: '3%' }}
                        />
                        <Select
                            placeholder='Giới tính'
                            style={{ width: '32%' }}
                        >
                            <Option value="rmb">Nam</Option>
                            <Option value="dollar">Nữ</Option>
                        </Select>
                    </span>
                </FormItem>
                <FormItem
                    label="Địa chỉ"
                // labelCol={{ span: 5 }}
                // wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Nhập mã đơn hàng!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    label="Số điện thoại"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >

                    <Input
                        type="text"
                        placeholder='Số điện thoại 123'
                        onChange={this.handleNumberChange}
                    />

                </FormItem>
                <FormItem
                    label="Địa chỉ Facebook"
                // labelCol={{ span: 5 }}
                // wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Nhập mã đơn hàng!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    label="Chú Thích"
                // labelCol={{ span: 5 }}
                // wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Nhập mã đơn hàng!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 12 }}

                >
                    <span>
                        <Button type="primary" style={{ textAlign: 'right', padding: '2px' }} htmlType="submit" onClick={this.onSubmit}>
                            Lưu khách hàng
                  </Button>
                        
                    </span>
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
class PriceInput extends React.Component {
    constructor(props) {
        super(props);

        const value = props.value || {};
        this.state = {
            number: value.number || 0,
            currency: value.currency || 'rmb',
        };
    }

    componentWillReceiveProps(nextProps) {
        // Should be a controlled component.
        if ('value' in nextProps) {
            const value = nextProps.value;
            this.setState(value);
        }
    }

    handleNumberChange(e) {
        const number = parseInt(e.target.value || 0, 10);
        if (isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ number });
        }
        this.triggerChange({ number });
    }

    handleCurrencyChange(currency) {
        if (!('value' in this.props)) {
            this.setState({ currency });
        }
        this.triggerChange({ currency });
    }

    triggerChange(changedValue) {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }

    render() {
        const { size } = this.props;
        const state = this.state;
        return (
            <span>
                <Input
                    type="text"
                    size={size}
                    value={state.number}
                    placeholder='Họ tên khách hàng'
                    onChange={this.handleNumberChange}
                    style={{ width: '65%', marginRight: '3%' }}
                />
                <Input
                    type="text"
                    size={size}
                    placeholder='nhập số điện thoại'
                    value={state.number}
                    onChange={this.handleNumberChange}
                    style={{ width: '32%' }}
                />
            </span>
        );
    }
}

