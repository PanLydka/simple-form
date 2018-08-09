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
        const index = this.props.state;
        const active = this.state.active[index];

        return (
            <form onSubmit={this.props.onSubmit}>
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

