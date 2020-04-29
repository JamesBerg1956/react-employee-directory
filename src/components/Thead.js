import React from "react";

function Thead(props){

    return(

        <tr>
            {props.columns.map(column => (
                <td>{column}</td> 
            ))} 
        </tr>

    );

}

export default Thead;