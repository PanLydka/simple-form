import React from 'react';
import { FormComponent } from '../components/FormComponent';
import { ResultFormComponent } from '../components/ResultFormComponent';


export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            dateBirthday: '',
        };

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(name, value){
        this.setState({
            [name]: value
        });
    }
    

    render() {
        return (
            <div>
              <FormComponent handleValueChange={this.handleValueChange} value={this.state}/>
              <ResultFormComponent personalData={this.state} />
            </div>
        )
    }
}