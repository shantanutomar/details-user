import React from 'react';
import { Link } from 'react-router-dom';

class RegisterUser extends React.Component {
    render(){
        return(
            <>
                <div>Register User</div>
                <Link to="/list-user"><button>List Users</button></Link>
            </>
        )
    }
}

export default RegisterUser;