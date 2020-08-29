import { LightningElement, track } from 'lwc';

// import uiRecordApi to create record
import { createRecord } from 'lightning/uiRecordApi';
// importing to show toast notifictions
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// importing Account fields
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Phone_FIELD from '@salesforce/schema/Account.Phone';
import Industry_FIELD from '@salesforce/schema/Account.Industry';
import Type_FIELD from '@salesforce/schema/Account.Type';

export default class CreateRecordDemo extends LightningElement {
    error;
    formFields = {
        Name: '',
        Industry: '',
        Phone: '',
        Type: ''
    };


    changeHandler(event) {
        const {name, value} = event.target
        this.formFields = { ...this.formFields, [name]:value}
    }


    handleSave() {
        const fields = {};

        fields[NAME_FIELD.fieldApiName] = this.formFields.Name;
        fields[Phone_FIELD.fieldApiName] = this.formFields.Phone;
        fields[Industry_FIELD.fieldApiName] = this.formFields.Industry;
        fields[Type_FIELD.fieldApiName] = this.formFields.Type;

        // Creating record using uiRecordApi
        let recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields }
        createRecord(recordInput)
            .then(result => {
                this.formFields = {};
                this.showToast('Success!!', 'Account Created Successfully!!', 'success')
                window.console.log('result ===> ' + JSON.stringify(result));
               
            })
            .catch(error => {
                showToast('Failure!!', 'Something went wrong!!', 'error')
                this.error = JSON.stringify(error);
            });
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }));
    }
   
}