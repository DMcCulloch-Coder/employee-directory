import React from 'react';
import '../styles/profile.css';

const Profile = (props) => {
    const person = props.currentEmployee
    console.log(person)

    return (
        <div className="profile">
            <p>Name: {`${person.name.first} ${person.name.last}`}</p>
            <p>Phone: {person.cell}</p>
            <p>E-mail: {person.email}</p>
            <img src={person.picture.large} alt="Profile picture" />
        </div>
    )
};

export default Profile;