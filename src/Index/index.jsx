import React from 'react';
import Layout from '../components/Layout';

import Main from './main';
import Nav from './nav';
import Content from './Content';
import './index.less'

export default () => 
  <Layout>
    <div className="index__layout cross-all">
      <Main />
      <Nav />
      <Content />
    </div>
  </Layout>