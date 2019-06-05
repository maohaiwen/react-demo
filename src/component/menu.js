import React, {Component} from 'react'
import { Tree ,Menu} from 'antd';
import "antd/dist/antd.css"
import {withRouter} from 'react-router-dom'

const SubMenu = Menu.SubMenu;

class MenuTree extends React.Component {

    constructor() {
        super();
        this.state = {
            menus: null,
            urlMap: null
        };
    }

    doRoute = (id) => {
        let urlMap = this.state.urlMap;
        let url = urlMap[id];
        this.props.history.push(url);
    }

    renderMenu = (menus) => {
        //alert(menus)
        if (menus !== null) {
            return (
                menus.map(menu => {
                    if (!menu.children || menu.children.length ===0) {
                        return (
                            <Menu.Item key={menu.id} onClick={(item)=>{this.doRoute(item.key)}}>
                                {menu.name}
                            </Menu.Item>
                        )
                    }else {
                        return (

                            <SubMenu
                                key={menu.id}
                                title={
                                        <span>
                                          {menu.name}
                                        </span>
                                }
                            >
                                {this.renderMenu(menu.children)}
                            </SubMenu>
                        )
                    }
                })
            )
        }

    };

    componentWillMount() {
        if (this.state.menus === null) {
            this.requestTree();
        }
    }

    requestTree = () => {
        fetch("http://localhost:8080/react/demo/menus")
            .then(response => response.json())
            .then(result => {
                if (result) {

                    let children = result.children;
                    let urlMap = {};
                    this.setUrlMap(urlMap, result);
                    this.setState({"menus": children});
                    this.setState({"urlMap": urlMap});
                }
            })
    };

    setUrlMap = (urlMap, menu) => {
        if (menu === null) {
            return;
        }

        if (menu.children && menu.children.length > 0) {
            for (let i = 0 ; i < menu.children.length ; i ++) {
                this.setUrlMap(urlMap, menu.children[i]);
            }
        }else {
            urlMap[menu.id] = menu.url;
        }

    }

    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {/*调用上面的递归方法*/}
                {this.renderMenu(this.state.menus)}
            </Menu>
        )
    }
}

export default withRouter(MenuTree);