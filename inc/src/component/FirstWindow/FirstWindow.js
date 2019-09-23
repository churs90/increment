import React from 'react';
import Settings from "./Settings";
import Button from "./Button";
import classes from './FirstWindow.module.css'
import generalStyles from '../../generalStyles.module.css'

const FirstWindow = (props) => {
        let classForButton = props.state.filterButtonValue === "ok" ? "filter-active" : "";
        let btnsTitle = ['ok'];
        return (
                <div className={generalStyles.window}>
                    <Settings state={props.state}
                              onChangeMaxValue={props.onChangeMaxValue}
                              onChangeStartValue={props.onChangeStartValue}
                              onSettingsFocus={props.onSettingsFocus}/>
                    <div className={generalStyles.buttonsField}>
                        <Button classForButton={classForButton} state={props.state} title={btnsTitle[0]} func={props.onclickOk}/>
                    </div>

                </div>
        );
};

export default FirstWindow;

