import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import {Form} from 'semantic-ui-react'
import Button from "react-bootstrap/Button";
import data from "../data.json";


class AddUser extends Component {

    state = {
        groupManager: "",
        groupName: ""

    }
    user = {
        id: "",
        groupManager: "",
        groupName: ""

    }
    users = [];

    constructor(props) {
        super(props);
        if(localStorage.getItem('users') == null || localStorage.getItem('users').length == 0 ) {
            this.users = data;
            console.log(this.users);
            localStorage.setItem('users', JSON.stringify(this.users));
        }else {
            this.users = JSON.parse(localStorage.getItem('users'));
        }

    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
s
    addUser = (state) => {
        this.user.groupManager = this.state.groupManager;
        this.user.groupName = this.state.groupName;
        this.user.id = "12321";
        this.users.push(this.user);
        console.log(this.users);
        this.sendDataSomewhere();
    }
    sendDataSomewhere = function jsonfile(data){
        localStorage.setItem('users', JSON.stringify(this.users));
    };

    render() {

        return (
            <div>
                <Modal show={this.state.isOpen}
                       onClose={this.toggleModal}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add New
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field>
                                <label>Manager</label>
                                <input
                                    id="groupManager"
                                    name="groupManager"
                                    value={this.state.groupManager}
                                    onChange={this.handleChange}
                                    placeholder='Manager Name'
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Group Name</label>
                                <input
                                    id="groupName"
                                    name="groupName"
                                    value={this.state.groupName}
                                    onChange={this.handleChange}
                                    placeholder='Group Name'
                                />
                            </Form.Field>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.addUser}>Add</Button>
                        <Button onClick={this.toggleModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Button className="addButton" onClick={this.toggleModal}>+</Button>
            </div>
        );
    }
}

export default AddUser;
