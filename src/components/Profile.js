import React from 'react';
import '../styles/profile.css';

const Profile = (props) => {
    console.log(props.currentEmployee)

    return (
        <div className="profile">
            <h2>More info on Dude</h2>
            <p>Dude's Pic</p>
        </div>
    )
};

export default Profile;