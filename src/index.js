import React from 'react';
import ReactDOM from 'react-dom';
import LayoutBase from './containers/Layout';
import App from './containers/App';
import {BrowserRouter as Router, Route, IndexRoute, Switch} from 'react-router-dom'
import Login from "./containers/login"
import CheckLogin from "./component/checklogin"
import MainPg from './containers/mbb'
import UserList from "./containers/user_list"
import AccessList from "./containers/access_list"
import GoodsList from "./containers/goods_list"
import GoodsSendList from "./containers/goods_send"

ReactDOM.render(
    <Router>
        <CheckLogin/>
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" render={() =>
                <LayoutBase>
                    <Switch>
                        <Route path="/app" exact component={App}></Route>
                        <Route path="/mbb" exact component={MainPg}></Route>
                        <Route path="/user_list" exact component={UserList}></Route>
                        <Route path="/access_list" exact component={AccessList}></Route>
                        <Route path="/goods_list" exact component={GoodsList}></Route>
                        <Route path="/goods_send" exact component={GoodsSendList}></Route>
                    </Switch>
                </LayoutBase>
            } />
        </Switch>
    </Router>
    ,
    document.getElementById('root')
);

