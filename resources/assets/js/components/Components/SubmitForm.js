
import React from 'react';
import { Form, Select, Input, Button } from 'antd';
import { connect } from 'react-redux';
const FormItem = Form.Item;
const Option = Select.Option;


class TimeRelatedForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange(value) {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }
  onSubmit() {
    this.props.form.validateFields((err, values) => {
      if (!err) {

        axios.post('/api/GetData', {
          "token": this.props.state.api_key_ghn,
          "OrderCode": values.note
        }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          })

      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Note"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Gender"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
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
  //todos: getVisibleTodos(state.todos, state.visibilityFilter)
  state: state
})
const mapDispatchToProps = dispatch => ({
  //toggleTodo: id => dispatch(toggleTodo(id))
  dispatch: dispatch
})
const WrappedTimeRelatedForm = Form.create()(TimeRelatedForm);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedTimeRelatedForm);