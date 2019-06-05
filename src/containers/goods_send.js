import React, { Component } from 'react';
import MenuTree from '../component/menu'
import Helmet from 'react-helmet';
import '../styles/app.css'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import {BrowserRouter as Router, Route, IndexRoute, Switch} from 'react-router-dom'
import LayoutBase from './Layout'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class GoodsSendList extends Component {

  render() {
    return (
        "goods send list!"
    );
  }
}

export default GoodsSendList;
