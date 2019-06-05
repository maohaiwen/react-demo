import React, { Component } from 'react';
import MenuTree from '../component/menu'
import Helmet from 'react-helmet';
import '../styles/app.css'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import {BrowserRouter as Router, Route, IndexRoute, Switch} from 'react-router-dom'
import LayoutBase from './Layout'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import {Table, Form, FormGroup, FormControl, Button} from 'react-bootstrap'
import AddUser from "../component/adduser"

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {"userList": null, "params": null};
  }

  componentWillMount() {
    if (this.state.userList === null) {
        this.queryUsers();
    }
  }

  queryUsers = () => {
    let userName = "";
    if (this.userName) {
        userName = this.userName.value;
    }
    let mobile = "";
    if (this.uMobile) {
      mobile = this.uMobile.value;
    }
    let url = "http://localhost:8080/react/demo/user_list?name="+ userName + "&mobile=" + mobile;
    fetch(url)
        .then(response => response.json())
        .then(result => {
           this.setState({"userList": result})
        })
  };

  renderTBody = () => {
    let list = this.state.userList;
    if (list === null) {
      return "";
    }
    return (
        list.map(user => {
          return (
              <tr>
                  <td>
                      {user.id}
                  </td>
                  <td>
                      {user.name}
                  </td>
                  <td>
                      {user.mobile}
                  </td>
                  <td><button onClick={() => {this.deleteUser(user.id)}}>删除</button></td>
              </tr>
          )
        })
    )
  }

  deleteUser = (userId) => {
      fetch("http://localhost:8080/react/demo/user_remove?userId=" + userId)
          .then(response => response.json())
          .then(result => {
              if (result.status === 200) {
                this.queryUsers();
              }
          })
  }

  openModal = () => {
    this.ref.open();
  }


  render() {
      let userList = this.state.userList;
      return (
          <div>
            <AddUser onSuccess={this.queryUsers} onRef={ref => {this.ref = ref}} />
            <Form inline>
              <FormGroup controlId="name">
                姓名&nbsp;
                <FormControl ref={ref=>{this.userName=ref}} type="text" placeholder="请填写姓名" />
              </FormGroup>
              &nbsp;
              <FormGroup controlId="mobile">
                手机&nbsp;
                <FormControl ref={ref=>{this.uMobile=ref}} type="text" placeholder="请填写手机" />
              </FormGroup>
              &nbsp;
              <Button onClick={()=>{this.queryUsers()}}>
                查询
              </Button>
              &nbsp;
              <Button onClick={()=>{this.openModal()}}>
                添加人员
              </Button>
            </Form>

            <Table style={{marginTop:10}} striped bordered condensed hover>
              <thead>
              <tr>
                <th>id</th>
                <th>姓名</th>
                <th>手机</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              {this.renderTBody()}
              </tbody>
            </Table>
          </div>
      );
  }
}

export default UserList;
