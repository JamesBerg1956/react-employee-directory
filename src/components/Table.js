// import React component
import React, { Component } from "react";

// START Tale class component
class Table extends Component{
    
    // START Table class component constructor
    constructor(props){
        
        // pass props to base class constructor
        super(props);

    }
    // END Table class component constructor

    // START define state objects
    state = {
        employees: this.props.employees,
        columns: Object.keys(this.props.employees[0])
    };
    // END define state objects

    // START Table class render method
    render() {
        return (
            <table>
                {/* TODO: create Thead compenent */}
                <thead>
                    {this.state.columns.map(column => (
                      <td>{column}</td>  
                    ))}
                </thead>
            </table>
        );
    }
    // END Table class render method

}
// END Tale class component

// export table component
export default Table;