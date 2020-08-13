import React from "react";
import SearchBar from "./SerachBar";
import ContactTable from "./ContactTable";

class FilterableContactTable extends React.Component {
    constructor(props) {
        super(props);
        // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
        this.state = {
            filterText: ''
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);

    }

    handleFilterTextInput(filterText) {
        //Call to setState to update the UI
        this.setState({
            filterText: filterText
        });
        //React knows the state has changed, and calls render() method again to learn what should be on the screen
    }

    render() {
        return (
            <div>
                <h1>Filterable React List</h1>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextInput={this.handleFilterTextInput}
                />
                <ContactTable
                    contacts={this.props.contacts}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}


var CONTACTS = [
    {name: 'Tom Jackson', phone: '555-444-333', email: 'tom@gmail.com'},
    {name: 'Mike James', phone: '555-777-888', email: 'mikejames@gmail.com'},
    {name: 'Janet Larson', phone: '555-222-111', email: 'janetlarson@gmail.com'},
    {name: 'Clark Thompson', phone: '555-444-333', email: 'clark123@gmail.com'},
    {name: 'Emma Page', phone: '555-444-333', email: 'emma1page@gmail.com'},

];

export default FilterableContactTable;