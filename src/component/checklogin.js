/**
 * Created by maohaiwen521 on 2019/4/30.
 */
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {get_cookie} from '../util/cookie_util'

class CheckLogin extends Component {

    componentDidMount() {
        let token = get_cookie("token");
        if (token) {
            fetch("http://localhost:8080/react/demo/login/check?token=" + token)
                .then(response => response.json())
                .then(result => {
                    if (result.status !== 200) {
                        this.props.history.push("/login")
                    }
                })
        }else {
            this.props.history.push("/login")
        }
    }

    render() {
        return null;
    }

}

export default withRouter(CheckLogin);