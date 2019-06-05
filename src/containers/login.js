import React, {Component} from 'react'
import { Grid, Row, Col, Panel, Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import {login} from '../actions/login_action'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {"username":"", "password":""}
    }

    handleChange = (event) => {
        let key = event.target.id;
        let value = event.target.value;
        this.setState({[key]:value})
    }

    submitLogin = () => {
        login(this.state, this.props.history)
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="username" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="text" placeholder="password" onChange={this.handleChange}/>
                </Form.Group>
                <Row>
                    <Button type="button" bsStyle="warning" onClick={this.submitLogin} block>登录</Button>
                </Row>
            </Form>
        );
    }
}

export default Login