import React from 'react';
import { MainComponent } from '../components/MainComponent';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            date: '',
            city: ''
        };
    }
    

    render() {
        console.log(this.state);
        return (
            <MainComponent state={this.state}/>
        )
    }
}