import React, {Component} from 'react'
import {List,InputItem,WingBlank,WhiteSpace, Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class Login extends Component {



    render() {
        return (
            <div className="page-login">
                <List>
                    <InputItem>账号</InputItem>
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                </List>
                <WingBlank>
                    <Button type="primary">注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login