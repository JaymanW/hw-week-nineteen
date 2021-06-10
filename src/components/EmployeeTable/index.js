import React from 'react'
import './EmployeeTable.css'
import EmployeeRow from '../EmployeeRow'

function EmployeeTable({ employeeData }) {
    // console.log(employeeData)
    // props.employeeData

    // name.first
    // name.last
    // picture
    // cell
    return (
        <div className="EmployeeTable">
            {
                employeeData.map(employee => {
                    return <EmployeeRow 
                            name={`${employee.name.first} ${employee.name.last}`}
                            picture={employee.picture.medium}
                            cell={employee.cell} 
                            />
                })
            }
        </div>
    )
}

export default EmployeeTable
