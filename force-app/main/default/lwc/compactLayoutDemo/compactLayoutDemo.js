import { LightningElement, track, wire } from 'lwc';
import getLayoutDetails from '@salesforce/apex/UserInfoDetails.getLayoutDetails';
export default class CompactLayoutDemo extends LightningElement {

    @track details;
    @track selectedValue = 'field1__c';

    getLayout(){
        getLayoutDetails({type:this.selectedValue}).then(data=>{
            console.log(data)
            this.details = data;
            }).catch(error=>{
                console.error(error);
            })
    }
    
get isFreeUser(){
    return this.details && this.details.some(item=>item.MasterLabel == 'Force.com - Free User')
}
get isSysAdmin(){
    return this.details && this.details.some(item=>item.MasterLabel == 'System Administrator')
}
get isSalesUser(){
    return this.details && this.details.some(item=>item.MasterLabel == 'Custom: Sales Profile')
}


get options() {
    return [
        { label: 'User1', value: 'field1__c' },
        { label: 'User2', value: 'field2__c' },
        { label: 'User3', value: 'field3__c' },
    ];
}

handleChange(event) {
    this.selectedValue = event.detail.value;
    this.getLayout()
}
}