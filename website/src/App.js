import React, { Component } from 'react';
import {Layout} from 'antd'

import Side from './components/sidebar.js'
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Side></Side>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
    );
}

export default App;
