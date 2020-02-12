import React from 'react';
import '../styles/employees.css';
import Employee from './Employee';

const Employees = (props) => {

    return (
        <div className="employee-box">
            <h2>Employees:</h2>
            <p>Sort: drop down menu</p>
            <p>Filter: drop down menu</p>
            {props.team.map((person, index) => (
                <Employee 
                    key={index} 
                    object={person}
                    getEmployee={props.highlightEmployee}
                />
            ))}
        </div>
    )

};

export default Employees;