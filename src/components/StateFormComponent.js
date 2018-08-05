import React from 'react';

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
                    displayed1: "Data Urodzenia: ",
                    displayed2: "Miasto Zamieszkania: ",
                    type1: "text",
                    type2: "text",
                    name1: "date",
                    name2: "city"
                }
            }
        }
    }


    render() {
        const active = this.props.state;
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="row">
                    <label className="col-xs-2" htmlFor={this.state.active[active].name1}>
                        {this.state.active[active].displayed1}
                    </label>

                    <input className="col-xs-10"
                        type={this.state.active[active].type1}
                        id={this.state.active[active].name1}
                        name={this.state.active[active].name1}
                        onChange={this.props.onChange}
                    />

                </div>
                <div className="row">
                    <label className="col-xs-2" htmlFor={this.state.active[active].name2}>
                        {this.state.active[active].displayed2} 
                    </label>
                   
                    <input className="col-xs-10"
                        type={this.state.active[active].type2}
                        id={this.state.active[active].name2}
                        name={this.state.active[active].name2}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="row">
                    <input type="submit" value="dalej"  />
                </div>
            </form>
        );
    }
}

