import React, {Component} from 'react';
import ListGroup from "react-bootstrap/cjs/ListGroup";
import Button from "react-bootstrap/Button";
import data from "../data.json"
import "../App.css"
import { Icon } from 'semantic-ui-react'


class Users extends Component {

    users = [];

    constructor(props) {
        super(props);
        if(localStorage.getItem('users') == null || localStorage.getItem('users').length == 0 ) {
            this.users = data;
            console.log(this.users);
            localStorage.setItem('users', JSON.stringify(this.users));
        } else {
            this.users = JSON.parse(localStorage.getItem('users'))
        }

    }



    render() {

        return (


            this.users.map(user =>
                <div className="container alert-secondary" id={user.id}>
                    <ListGroup horizontal className="asd mb-2">
                        <ListGroup.Item>{user.id}</ListGroup.Item>
                        <ListGroup.Item>{user.groupManager}</ListGroup.Item>
                        <ListGroup.Item>{user.groupName}</ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary">Primary</Button>{' '}
                            <Button variant="primary">Primary</Button>{' '}
                        </ListGroup.Item>
                        <Icon loading name='spinner' />
                    </ListGroup>
                </div>

            )
        );
    }
}

export default Users;
