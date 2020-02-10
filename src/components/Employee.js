import React from 'react';
import '../styles/employee.css';

const Employee = (props) => {

    const person = props.object

    return (
        <div>
            <p>Name: {`${person.name.first} ${person.name.last}`}</p>
            <p></p>
        </div>
    )
};

export default Employee;
