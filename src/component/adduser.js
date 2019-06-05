import React, {Component} from 'react'
import {Modal, Button, OverlayTrigger, FormGroup, FormControl} from 'react-bootstrap'

class AddUser extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }

    addUser = () => {
        let uId = this.uId.value;
        let uName = this.uName.value;
        let uMobile = this.uMobile.value;

        let params = {"id": uId, "name": uName, "mobile": uMobile};

        var fetchOption = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
            body:JSON.stringify(params)
        }

        fetch("http://localhost:8080/react/demo/user_add", fetchOption)
            .then(response => response.json())
            .then(result => {
                if (result.status === 200) {
                    this.close();
                    this.props.onSuccess();
                }
            })
    }

    render() {
        return (
            <div>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>添加人员</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                id&nbsp;
                                <FormControl ref={ref=>{this.uId=ref}} type="text" placeholder="请输入id" />
                            </FormGroup>
                            <FormGroup>
                                姓名&nbsp;
                                <FormControl ref={ref=>{this.uName=ref}} type="text" placeholder="请输入姓名" />
                            </FormGroup>
                            <FormGroup>
                                手机&nbsp;
                                <FormControl ref={ref=>{this.uMobile=ref}} type="text" placeholder="请输入手机号" />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.addUser}>提交</Button>
                        <Button onClick={this.close}>取消</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddUser;