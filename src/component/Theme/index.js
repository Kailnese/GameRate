import React, { Component } from 'react'

import { Icon, Layout, Menu } from 'antd';
import './index.less'
import logo from './logo.png'
import { withRouter } from 'react-router-dom'

const { Sider, Content } = Layout;


class Theme extends Component {

    onMenuClick = (key) => {
        this.props.history.push(key.key)
    }

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="qf-logo">
                    <img src={logo} alt="Learning" />
                </div>
                <Menu 
                    theme="dark" 
                    mode="inline" 
                    defaultSelectedKeys={this.props.location.pathname}
                    onClick={this.onMenuClick}>
                    {
                        this.props.menus.map(item => {
                            return (
                                <Menu.Item key={item.pathname}>
                                    <Icon type={item.icon} />
                                    {item.title}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: '#fff',
                    overflow: 'auto'
                    }}
                >
                    {this.props.children}
                </Content>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(Theme)