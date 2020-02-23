import React from 'react';
import './ListUser.css'

class ListUser extends React.Component {
    render() {
        let allUsers = localStorage.getItem('users') && JSON.parse(localStorage.getItem('users')).map(ele => {
            return(
                <section className="list-root">
                    <div>First Name: {ele.firstName}</div>
                    <div>Last Name: {ele.lastName}</div>
                    <div>Gender: {ele.gender === 'M' ? `Male`: `Female`}</div>
                </section>
            )
        });
        return(
            <div>{allUsers}</div>
        )
    }
}

export default ListUser;
