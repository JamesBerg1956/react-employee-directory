// import React component
import React, { Component } from "react";
// import Tr component
import Tr from "./Tr"
// import Thead component
import Thead from "./Thead"
// import Search component
import Search from "./Search"

// START Tale class component
class Table extends Component{
    
    // START Table class component constructor
    constructor(props){
        
        // pass props to base class constructor
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);

    }
    // END Table class component constructor

    // START define state objects
    state = {
        employees: this.props.employees,
        columns: Object.keys(this.props.employees[0]),
        searchTerm: ''
    };
    // END define state objects

    // START handleSearch method
    handleSearchChange(searchTerm) {
        this.setState({searchTerm});
    }

    // TODO: create HandleSort method

    // START Table class render method
    render() {

        const searchTerm = this.state.searchTerm

        return (

            <React.Fragment>

                <Search 
                    searchTerm={searchTerm}
                    handleSearchChange={this.handleSearchChange}
                />
            
                <table>
                    <thead>
                        <Thead columns={this.state.columns} />
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => (
                        <Tr firstName={employee.first_name} lastName={employee.last_name} role={employee.role} salary={employee.salary} department={employee.department}/> 
                        ))}
                    </tbody>
                </table>
                
            </React.Fragment>
        );
    }
    // END Table class render method

}
// END Tale class component

// export table component
export default Table;