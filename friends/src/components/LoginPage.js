import React from 'react';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    login = e => {
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    placeholder='username'
                    onChange={this.handleChange}>
                    </input>
                    <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    placeholder='password'
                    onChange={this.handleChange}>
                    </input>
                </form>
            </div>
        )
    }
}