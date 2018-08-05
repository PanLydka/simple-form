import React from 'react';
import './App.scss';
import { FormComponent } from './FormComponent';

export const MainComponent = () => {
    return (
        <div>
            <div className="row center-xs header">
                <h1 className="col-xs-6 header__title">
                    formularz wprowadzania danych osobowych!
                </h1>
            </div>
            <div className="row center-xs form">
                <FormComponent />
            </div>
        </div>
    )
}