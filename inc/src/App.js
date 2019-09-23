import React from 'react';
import generalStyles from'./generalStyles.module.css';
import FirstWindow from "./component/FirstWindow/FirstWindow";
import SecondWindow from "./component/SecondWindow/SecondWindow";

class App extends React.Component {
     state = {
         maxValue: 5,
         startValue: 0,
         incValue: 0,
         filterValue: 'all',
         displayNone: 'displayNone',
         displayBlock: 'displayBlock',
         message: 'Click "Ok"',
         errorFirstInput: false,
         errorSecondInput: false,
         messageError: '',
    };


     inc = () => {
         if (this.state.incValue < this.state.maxValue) {
             this.setState({
                 incValue: this.state.incValue + 1
             });
         }
     };

     onclickOk = () => {
         if ((this.state.filterValue === 'ok')||(this.state.message !== 'ERROR')) {
             this.setState({
                 displayBlock: 'displayBlock',
                 displayNone: 'displayNone',
                 filterValue: 'all',
                 incValue: this.state.startValue});
         }
     };

     resetClick = () => {
         if ((this.state.message !== 'ERROR') || (this.state.filterValue === 'all')) {
             this.setState({incValue: this.state.startValue});
         }
     };

     onSettingsFocus = () => {
         if(this.state.message==='ERROR'){
             this.setState({filterValue: ''});
         }else {
        this.setState({filterValue: 'ok'});
         this.setState({displayBlock: 'displayNone'});
         this.setState({displayNone: 'displayBlock'})
         }
     };

     onChangeMaxValue = (e) => {
         if(this.state.startValue >= 0){
             let newMaxValue = e.currentTarget.value;
             if((parseInt(newMaxValue)<0)||(parseInt(newMaxValue))<=(this.state.startValue)) {
                 this.setState({message: "ERROR"});
                 this.setState({errorFirstInput: true});
                 this.setState({messageError: 'messageError'});
                 this.setState({filterValue: ''});
             } else {
                 this.setState({filterValue: 'ok'});
                 this.setState({message: 'Click "Ok"'});
                 this.setState({errorFirstInput: false});
                 this.setState({messageError: ''});
                 if(newMaxValue>this.state.startValue){
                     this.setState({errorSecondInput: false})
                 }
             }
             this.setState({maxValue: parseInt(newMaxValue)});
         }
     }
    ;

     onChangeStartValue = (e) => {
         if (this.state.maxValue > 0) {
             let newStartValue = e.currentTarget.value;
             if((parseInt(newStartValue)<0) || (parseInt(newStartValue)>=this.state.maxValue)) {
                 this.setState({message: "ERROR"});
                 this.setState({errorSecondInput: true});
                 this.setState({messageError: 'messageError'});
                 this.setState({filterValue: ''});
             } else {
                 this.setState({filterValue: 'ok'});
                 this.setState({message: 'Click "Ok"'});
                 this.setState({errorSecondInput: false});
                 this.setState({messageError: ''});
                 if(newStartValue<this.state.maxValue){
                     this.setState({errorFirstInput: false});
                 }
             }
             this.setState({startValue: parseInt(newStartValue)});
         }
     };

    render = () => {
        return (
            <div className={generalStyles.page}>
                <FirstWindow state={this.state}
                             onChangeMaxValue={this.onChangeMaxValue}
                             onChangeStartValue={this.onChangeStartValue}
                             onSettingsFocus={this.onSettingsFocus}
                             onclickOk={this.onclickOk}/>
                <SecondWindow state={this.state} inc={this.inc} resetClick={this.resetClick}/>
            </div>
        );
    }
}
export default App;

