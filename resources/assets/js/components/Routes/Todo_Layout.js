import React from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Steps, message,Button } from 'antd';
import SubmitForm from '../Components/SubmitForm';
import './todo.css'
const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: 'First-content',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'Last',
    content: 'Last-content',
}];
class Todo_Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
        this.next= this.next.bind(this);
        this.prev= this.prev.bind(this);
      }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
    render() {
        const { current } = this.state;
        return (
            <div style={{ padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                </Row>
                <Row style={{paddingTop:'10px'}}>
                    <div>
                        <Steps current={current}>
                            {steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">{steps[current].content}</div>
                        <div className="steps-action">
                            {
                                current < steps.length - 1
                                && <Button type="primary" onClick={this.next}>Next</Button>
                            }
                            {
                                current === steps.length - 1
                                && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                            }
                            {
                                current > 0
                                && (
                                    <Button style={{ marginLeft: 8 }} onClick={this.prev}>
                                        Previous
                                    </Button>
                                )
                            }
                        </div>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Todo_Layout);
