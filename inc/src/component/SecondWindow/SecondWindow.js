import React from 'react';
import NumberField from "./NumberField";
import classes from './SecondWindow.module.css'
import generalStyles from '../../generalStyles.module.css'
import Button from "../FirstWindow/Button";

const SecondWindow = (props) => {
    let btnsTitle = ['inc','reset'];
    let classForButton = props.state.filterValue === "all" ? "filter-active" : "";
        return (
            <div className={generalStyles.window}>
                <NumberField state={props.state}/>
                <div className={generalStyles.buttonsField}>
                    <Button classForButton={classForButton} state={props.state} func={props.inc} title={btnsTitle[0]}/>
                    <Button classForButton={classForButton} state={props.state} func={props.resetClick} title={btnsTitle[1]}/>
                </div>
            </div>
        );
};

export default SecondWindow;

