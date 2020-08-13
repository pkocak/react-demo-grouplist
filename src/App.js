import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/cjs/ListGroup";
import Button from 'react-bootstrap/Button'
import data from './data.json'

import ContactRow from "./components/ContactRow";
import ContactTable from "./components/ContactTable";
import FilterableContactTable from "./components/FilterableContactTable";
import SearchBar from "./components/SerachBar";

import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
    render() {
        return (
            <div className="container alert-secondary">
                <Users/>
                <AddUser/>
            </div>
        )
    }
}

export default App;
