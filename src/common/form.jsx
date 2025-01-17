import React, { Component } from 'react';
import Joi from 'joi-browser';

class Form extends Component {
    state = { 
        data: {},
        error: {}
    };

    validate = () => {
        const option = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, option);
        const errors ={};
        if(!error) return null;
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    };

    validateProprty = ({name, value}) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name]};
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProprty(input);
        const data = { ...this.state.data };
        if(errorMessage)  errors[input.name] = errorMessage;
        else delete errors[input.name]; 
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderButton = (label) => {
        return <button 
                disabled={this.validate()}
                className="btn btn-primary">{label}</button>
    }
}
 
export default Form;