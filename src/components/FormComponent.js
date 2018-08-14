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

    }



    render() {
        return (
            <block>
                <div className="row">
                <header className="col-sm-12 header">
                        <h1 className="text-center text-uppercase header__title"> <a href="index.html" className="text-secondary">
                            formularz wprowadzania danych osobowych! </a>
                     </h1> 
                </header>
                </div>
                <block>

                    {this.state.active <= this.state.max ? (
                        <StateFormComponent state={this.state.active} value={this.props.value} onChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    ) :
                        (null)
                    }

                </block>

                
            </block>
        )
    }
}