import React from 'react';
import classes from './FirstWindow.module.css'
import generalStyles from '../../generalStyles.module.css'

const Button = (props) => {
        return (
                <button className={generalStyles[props.classForButton]} onClick={props.func}>{props.title}</button>
        );
};

export default Button;

