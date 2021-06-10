import React from 'react'
import './EmployeeTable.css'
import EmployeeRow from '../EmployeeRow'

function EmployeeTable({ employeeData, sort, filter }) {
    // const employeeAsc = employeeData.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)
    // const employeeDesc = employeeData.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
    let filteredEmployees;
    if (filter === 'male') {
        filteredEmployees = employeeData.filter(employee => employee.gender === 'male');
    } else if (filter === 'female') {
        filteredEmployees = employeeData.filter(employee => employee.gender === 'female');
    } else {
        filteredEmployees = employeeData;
    }

    console.log(filteredEmployees)


    let employeeArray;
    if (sort === 'desc') {
        employeeArray = filteredEmployees.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1);
    } else if (sort === 'asc') {
        employeeArray = filteredEmployees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
    } else {
        employeeArray = filteredEmployees;
    }

    let employeeGender;

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
