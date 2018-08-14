import React from 'react';

export const ResultFormComponent = (props) => {
    
    const welcomeName = (props.personalData.firstName).length > 0 ? props.personalData.firstName : "___";

    return (
        <div className="formResult">
            <p className="text-center text-capitalize formResult__welcome text-primary">
                Witaj {welcomeName}!
            </p>

            <div className="row formResult__heading">
                <h2 className="col-sm-5 text-center"> Twoje dane osobowe: </h2>
            </div>
            <div className="row">
                <span className="col-sm-2 offset-sm-4">Imię i nazwisko: </span> <span className="col-sm-4"> {props.personalData.firstName} {props.personalData.lastName} </span>
                <span className="col-sm-2 offset-sm-4">Data Urodzenia:</span> <span className="col-sm-4"> {props.personalData.dateBirthday}  </span>
                <span className="col-sm-2 offset-sm-4">E-mail: </span> <span className="col-sm-4"> {props.personalData.email} </span>
            </div>

        </div>
    )
}