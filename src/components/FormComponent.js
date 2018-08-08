import React from 'react';
import { StateFormComponent } from './StateFormComponent';


export class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1,
            max: 2
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
       this.setState({
            [this.props.stateApp.e.target.name]: e.target.value
         });
        
         console.log(this.props.stateApp)
  
    }

    handleSubmit(e){
        this.setState({
            active: this.state.active + 1
        });

        e.preventDefault();
    }



    render() {
        return (
            
               <div>
                  { this.state.active <= this.state.max ? ( 
                    <StateFormComponent state={this.state.active} onChange={this.handleChange} onSubmit={this.handleSubmit} />
                  ) : (
                    <h1> wait... </h1>
                  )}
              </div>
        )
    }
}