import React from 'react';
import '../styles/employees.css';
import Employee from './Employee';

const Employees = (props) => {

    return (
        <div className="employee-box">
            <h2>Employees:</h2>
            <p>Filter: <button onClick={() => props.getWomanEmployees()}>Women</button><button onClick={() => props.getMenEmployees()}>Men</button><button onClick={() => props.getAllEmployees()}>All</button></p>
            <p>Sort: <button onClick={() => props.sortEmployees()}>By Name</button></p>
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