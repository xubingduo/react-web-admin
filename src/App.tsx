import React, { Component } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './App.css';

import SubMenu from './page/layout/SubMenuBox';

const { Header, Sider, Content } = Layout;
type Props = {
  collapsed: boolean;
};

export default class App extends Component<{}, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render(): React.ReactNode {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider width={256} collapsible collapsed={this.state.collapsed} trigger={null}>
          <div className="logoBox">沙雕</div>
          <SubMenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
