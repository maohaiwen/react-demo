import React, { Component } from 'react';
import MenuTree from '../component/menu'
import Helmet from 'react-helmet';
import '../styles/app.css'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import {withRouter} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class LayoutBase extends React.PureComponent {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <MenuTree/>
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 800, marginTop: 20 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>footer</Footer>
            </Layout>
        </Layout>
    );
  }
}

export default withRouter(LayoutBase);
