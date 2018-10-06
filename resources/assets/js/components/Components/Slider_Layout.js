import React from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
class Slider_Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            collapsed: false,

        }

        this.onCollapse = this.onCollapse.bind(this);
        this.toggle = this.toggle.bind(this);

    }
    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse} >

                 <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <NavLink to="/">
                            <Icon type="home" />
                            <span>Trang chủ</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to='/job'>
                            <Icon type="profile" />
                            <span>Công việc</span>
                        </NavLink>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="shopping-cart" /><span>Kiểm tra mã đơn</span></span>}
                    >
                        <Menu.Item key="3">Giao hàng nhanh</Menu.Item>
                        <Menu.Item key="4">Giao hàng tiết kiệm</Menu.Item>
                        <Menu.Item key="5">Viettel Post</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span>Team</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="7">
                        <NavLink to="/cau-hinh">
                            <Icon type="edit" />
                            <span>Cấu hình</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <NavLink to="/logout">
                            <Icon type="logout" />
                            <span>Đăng xuất</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
const mapStateToProps = state => ({
    state: state
})
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(Slider_Layout);