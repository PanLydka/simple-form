import React from 'react';
import { ValidateForm } from '../containers/ValidateForm';

export class StateFormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: {
                1: {
                    displayed1: "Imie: ",
                    displayed2: "Nazwisko: ",
                    type1: "text",
                    type2: "text",
                    name1: "firstName",
                    name2: "lastName"
                },
                2: {
                    displayed1: "e-mail: ",
                    displayed2: "Data Urodzenia: ",
                    type1: "email",
                    type2: "date",
                    name1: "email",
                    name2: "dateBirthday"
                }
            }
        }


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        const inputs = new ValidateForm([
            {
                type: this.active.type1,
                value: this.props.value[this.active.name1]
            },
            {
                type: this.active.type2,
                value: this.props.value[this.active.name2]
            }
        ]);

        return inputs.validate();
    }


    handleSubmit(e) {

        e.preventDefault();

        if (this.validateForm())
            this.props.handleSubmit(e);
        else { }// hmm...
    }



    render() {
        this.active = this.state.active[this.props.state];
        const active = this.active;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <label className="col-xs-2" htmlFor={active.name1}>
                        {active.displayed1}
                    </label>

                    <input className="col-xs-10"
                        type={active.type1}
                        id={active.name1}
                        name={active.name1}
                        value={this.props.value[active.name1]}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="row">
                    <label className="col-xs-2" htmlFor={active.name2}>
                        {active.displayed2}
                    </label>

                    <input className="col-xs-10"
                        type={active.type2}
                        id={active.name2}
                        name={active.name2}
                        value={this.props.value[active.name2]}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="row">
                    <input type="submit" value="dalej" />
                </div>
            </form>
        );
    }
}

