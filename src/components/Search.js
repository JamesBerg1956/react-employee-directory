// import React component
import React, { Component } from "react";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {searchTerm: ''};
    }

    handleChange(e){
        this.setState({searchTerm: e.target.value});
        this.props.handleSearchChange(e);
    }

    render(){

        const searchTerm = this.props.searchTerm;
        const searchName = this.props.searchName;

        return (

            <React.Fragment>

            <input
                name={searchName}
                value={searchTerm}
                onChange={this.handleChange}
                placeholder="search"
            />  

            {searchTerm}

            </React.Fragment>

        );
      
    }

}


export default Search;