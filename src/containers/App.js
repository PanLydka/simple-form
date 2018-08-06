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
        return (
            <MainComponent stateApp={this.state}/>
        )
    }
}