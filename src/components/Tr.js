// import React component
import React, { Component } from "react";

function Tr(props){

    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.role}</td>
            <td>{props.salary}</td>
            <td>{props.department}</td>
        </tr>
    );

}

export default Tr;