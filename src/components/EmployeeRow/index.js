import React from 'react'
import './EmployeeRow.css'

function EmployeeRow(props) {
    // props.name
    // props.picture
    // props.cell
    return (
        <div className="EmployeeRow">
            <img src={props.picture} />
            <p className="employee-name">{props.name}</p>
            <p className="employee-cell">{props.cell}</p>
        </div>
    )
}

export default EmployeeRow
