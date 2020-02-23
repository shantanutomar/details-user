import React from 'react';
import './ListUser.css'
import { Link } from 'react-router-dom';

class ListUser extends React.Component {
    render() {
        let allUsers = localStorage.getItem('users') && JSON.parse(localStorage.getItem('users')).map((ele, index) => {
            return(
                <section className="list-root" key={index}>
                    <div>First Name: {ele.firstName}</div>
                    <div>Last Name: {ele.lastName}</div>
                    <div>Gender: {ele.gender === 'M' ? `Male`: `Female`}</div>
                </section>
            )
        });
        return(
            <>
                <div>{localStorage.getItem('users') ? allUsers : <p>No users exists as of now. Please add a User !!</p>}</div>
                <Link to="/"><button>Add User</button></Link>
            </>
            )
    }
}

export default ListUser;
