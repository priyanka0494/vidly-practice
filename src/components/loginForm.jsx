import React from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';
import Input from '../common/input';

class LoginForm extends Form {
    // username = React.createRef();
    //ref example. We need not always dependent on refs.
    // componentDidMount() {
    //     this.username.current.focus();
    // }
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = () => {
        //call the server
        console.log("Submitted");
    }

    render() {
        const { data, errors } = this.state;
        return <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input
                    name="username"
                    value={data.username}
                    label="username"
                    onChange={this.handleChange}
                    error={errors.username}
                />
                <Input
                    name="password"
                    value={data.password}
                    label="password"
                    onChange={this.handleChange}
                    error={errors.password}
                />
                {this.renderButton("Login")}
            </form>
        </div>;
    }
}

export default LoginForm;