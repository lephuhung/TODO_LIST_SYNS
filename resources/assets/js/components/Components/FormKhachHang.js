import React from 'react'
import { Form, Input, Select, Button, Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class FormKhach extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form >
                <FormItem label="Price">
                    {getFieldDecorator('price', {
                        initialValue: { number: 0, currency: 'rmb' },
                        rules: [{ validator: this.checkPrice }],
                    })(<PriceInput />)}
                </FormItem>
                <FormItem
                    label="Tên Khách Hàng"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 7 }}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Nhập mã đơn hàng!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    label="Gender"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
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
                        />
                    </span>
                </FormItem>
                <FormItem>
                    <span>
                        <Input
                            type="text"

                            onChange={this.handleNumberChange}
                            style={{ width: '35%', marginRight: '3%' }}
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
                    style={{ textAlign: 'right' }}
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

    handleNumberChange(e){
        const number = parseInt(e.target.value || 0, 10);
        if (isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ number });
        }
        this.triggerChange({ number });
    }

    handleCurrencyChange(currency){
        if (!('value' in this.props)) {
            this.setState({ currency });
        }
        this.triggerChange({ currency });
    }

    triggerChange (changedValue){
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
                    onChange={this.handleNumberChange}
                    style={{ width: '65%', marginRight: '3%' }}
                />
                <Input
                    type="text"
                    size={size}
                    value={state.number}
                    onChange={this.handleNumberChange}
                    style={{ width: '32%' }}
                />
            </span>
        );
    }
}

