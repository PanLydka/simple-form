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
                    displayed1: " Data Urodzenia: ",
                    displayed2: "e-mail: ",
                    type1: "date",
                    type2: "email",
                    name1: "dateBirthday",
                    name2: "email"
                }
            },
            showAlert: false
        }


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        const inputs = new ValidateForm([
            {
                type: this.active.type1,
                value: this.props.value[this.active.name1],
                invalid: false
            },
            {
                type: this.active.type2,
                value: this.props.value[this.active.name2],
                invalid: false
            }
        ]);

        return inputs.validate();
    }


    handleSubmit(e) {

        e.preventDefault();

        if (this.validateForm())
            this.props.handleSubmit(e);
        else
            this.setState({ showAlert: true });
    }


    render() {
        this.active = this.state.active[this.props.state];
        const active = this.active;

        const alert = (this.state.showAlert ?
            <div class="alert alert-danger col-sm-4 offset-sm-4 px-2 py-2">
                <span> <strong>O nie!</strong> Znaleźliśmy błąd, sprawź wprowadzone dane. </span>
            </div>
            : null
        )

        return (

            <form onSubmit={this.handleSubmit} className="form">
                {alert}
                <div className="form-group row">
                    <label className="col-sm-1 offset-sm-4 col-form-label" htmlFor={active.name1}>
                        {active.displayed1}
                    </label>
                    <div className="col-sm-3">
                        <input className="form-control"
                            type={active.type1}
                            id={active.name1}
                            name={active.name1}
                            value={this.props.value[active.name1]}
                            onChange={this.props.onChange}
                        />
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-1 offset-sm-4 col-form-label" htmlFor={active.name2}>
                        {active.displayed2}
                    </label>

                    <div className="col-sm-3">
                        <input className="form-control"
                            type={active.type2}
                            id={active.name2}
                            name={active.name2}
                            value={this.props.value[active.name2]}
                            onChange={this.props.onChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-4">
                        <input className="btn btn-success" type="submit" value="dalej" />
                    </div>
                </div>
            </form>
        );
    }
}

