import React from 'react';
import classes from './FirstWindow.module.css'
import generalStyles from '../../generalStyles.module.css'

const Settings =(props) => {
    let errorInput = '';
    if(props.state.errorFirstInput === true){
        errorInput = 'errorInput'
    }

        return (
                    <div className={`${classes.settings} ${generalStyles.firstField}`}>
                        <div><label>max value: <input className={classes[errorInput]}
                                                      type="number"
                                                      value={props.state.maxValue}
                                                      onChange={props.onChangeMaxValue}
                                                      onFocus={props.onSettingsFocus}/></label></div>
                        <div><label>start value: <input className={classes[props.state.errorSecondInput]} type="number"
                                                                          value={props.state.startValue}
                                                                          onChange={props.onChangeStartValue}
                                                                          onFocus={props.onSettingsFocus}/></label></div>
                    </div>
        );
};

export default Settings;

