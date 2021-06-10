import React from 'react'
import './EmployeeTable.css'
import EmployeeRow from '../EmployeeRow'

function EmployeeTable({ employeeData, sort }) {
    // const employeeAsc = employeeData.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)
    // const employeeDesc = employeeData.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)

    let employeeArray;
    if (sort === 'desc') {
        employeeArray = employeeData.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1);
    } else if (sort === 'asc') {
        employeeArray = employeeData.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
    } else {
        employeeArray = employeeData;
    }

    return (
        <div className="EmployeeTable">
            {employeeArray.map(employee => 
                {
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
