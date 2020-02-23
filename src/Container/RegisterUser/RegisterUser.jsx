import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterUser.css'

class RegisterUser extends React.Component {
    
    state = {
        firstName: "",
        lastName: "",
        gender: "M"
    }

    onValueChange = (event, field) => {
        if(field === "FN") {
            this.setState({firstName: event.target.value});
        } else if(field === "LN") {
            this.setState({lastName: event.target.value});
        } else if(field === "GN") {
            this.setState({gender: event.target.value});
        }
    }
    validateForm = () => {
        return (this.state.firstName || this.state.lastName) === "" ? false : true;
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.validateForm()) {
            console.log('values', this.state);
            let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []; 
            users.push({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                gender: this.state.gender
            });
            
            if(users.length > 0) {
                localStorage.setItem('users', JSON.stringify(users));
            }

            this.setState({firstName: "", lastName: "", gender: "M"});
        }else {
            alert('Please enter all the values');
        }
    }
    
    render(){
        return(
            <>
                <div>
                    <form className="form-root" onSubmit={this.onFormSubmit}>
                        <input className="ele-root" type="text" placeholder="Enter Firstname" value={this.state.firstName} 
                            onChange={(event) => this.onValueChange(event, "FN")}></input>
                        <input className="ele-root" type="text" placeholder="Enter Lastname" value={this.state.lastName}
                            onChange={(event) => this.onValueChange(event, "LN")}></input>                        
                        <label className="ele-root">Select Gender - 
                            <label><input type="radio" id="male" name="gender" value="M"
                                checked={this.state.gender === "M"} onChange={(event) => this.onValueChange(event, "GN")}/>Male</label>                        
                            <label><input type="radio" id="female" name="gender" value="F"
                                checked={this.state.gender === "F"} onChange={(event) => this.onValueChange(event, "GN")}/>Female</label>                        
                        </label>
                        
                        <button className="form-submit" type="submit">Submit form</button>
                    </form>
                </div>
                <Link to="/list-user"><button>List Users</button></Link>
            </>
        )
    }
}

export default RegisterUser;