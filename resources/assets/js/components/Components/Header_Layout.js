import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Icon, Layout } from 'antd';
const { Header } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Thông tin tài khoản</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Cấu hình</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/logout">Đăng xuất</a>
    </Menu.Item>
  </Menu>
);
class Header_Layout extends React.Component {

  render() {
    return (
      <Header style={{ background: '#3C8DBC', padding: 2 }}>
        <div style={{ float: "right", paddingRight: 15 }}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              {this.props.state.username} <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
const mapStateToProps = state => ({
  state: state
})
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})
export default connect(mapStateToProps,mapDispatchToProps)(Header_Layout);