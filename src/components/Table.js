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
    };
    // END define state objects

    // START handleSearch method
    handleSearchChange(event) {

        // get input value
        const searchTerm = event.target.value;
        // get input name
        const searchName = event.target.name;

        // if the search term is not null
        if(searchTerm){
            // filter this.state.employees to include only searchTerm
            this.setState({employees: this.props.employees.filter(employee => employee[searchName].includes(searchTerm))});
        }
        else {
            // set state of employees back to passed prop
            this.setState({employees: this.props.employees});
        }
        
    }
    // END handleSearch method

    // TODO: create HandleSort method

    // START Table class render method
    render() {

        return (

            <React.Fragment>
            
                <table>
                    {this.state.columns.map(column => (
                        <td>
                            <Search 
                                searchName={column}
                                handleSearchChange={this.handleSearchChange} 
                            />
                        </td>
                    ))} 
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