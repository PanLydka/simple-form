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
        this.props.handleValueChange(e.target.name, e.target.value);
    }

    handleSubmit(e) {
        this.setState({
            active: this.state.active + 1
        });

        e.preventDefault();
    }



    render() {
        return (
            <div>
                <div className="row center-xs header">
                    <h1 className="col-xs-6 header__title">
                        formularz wprowadzania danych osobowych!
                </h1>
                </div>
                <div className="row center-xs form">  

                    {this.state.active <= this.state.max ? (
                        <StateFormComponent state={this.state.active} value={this.props.value} onChange={this.handleChange} onSubmit={this.handleSubmit} />
                    ) : (
                            <h1> wait... </h1>
                        )}
                
                </div>
            </div>
        )
    }
}