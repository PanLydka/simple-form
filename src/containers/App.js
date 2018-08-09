import React from 'react';
import { FormComponent } from '../components/FormComponent';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            date: '',
            city: ''
        };

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(name, value){
        this.setState({
            [name]: value
        });
    }
    

    render() {
        console.log(this.state);
        return (
            <FormComponent handleValueChange={this.handleValueChange} value={this.state}/>
        )
    }
}