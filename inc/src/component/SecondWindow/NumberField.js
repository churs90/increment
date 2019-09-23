import React from 'react';
import classes from './SecondWindow.module.css'
import generalStyles from '../../generalStyles.module.css'


const NumberField = (props) => {
    let maxIncClass = '';
    if(props.state.incValue === props.state.maxValue){
         maxIncClass = 'active'
    }
        return (
                <div className={`${classes.firstField} ${generalStyles.firstField}`}>
                    <div className={`${classes.numberField} ${classes[props.state.displayBlock]} ${classes[maxIncClass]}`}>{props.state.incValue}</div>
                    <div className={`${classes.clickOk} ${classes[props.state.displayNone]} ${classes[props.state.messageError]}`}>{props.state.message}</div>
                </div>
        );
};

export default NumberField;

