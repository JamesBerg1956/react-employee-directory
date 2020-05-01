// import React component
import React, { Component } from "react";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = {searchTerm: ''};
    }

    handleChange(e){
        this.props.handleSearchChange(e.target.value);
    }

    render(){

        const searchTerm = this.props.searchTerm;

        return (

            <React.Fragment>

            <input
                value={searchTerm}
                onChange={this.handleChange}
            />  

            {searchTerm}

            </React.Fragment>

        );
      
    }

}


export default Search;