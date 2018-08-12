import React from 'react';

export const ResultFormComponent = (props) => {
    return (
        <div className="row center-xs formResult">
            <h2 className="col-xs-8 formResult__welcome">
                witaj {props.personalData.firstName}!
            </h2>
            <div className="row">
            <h3 className="col-xs-4"> Twoje dane osobowe: </h3>
                <div className="col-xs-8 box">
                    Imię i nazwiskO: {props.personalData.firstName} {props.personalData.lastName} <br/>
                    Data Urodzenia: {props.personalData.date}  <br/>
                    Miasto: {props.personalData.city} <br />
                </div>
              
            </div>

        </div>
    )
}