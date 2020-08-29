import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Phone_FIELD from '@salesforce/schema/Account.Phone';
import Industry_FIELD from '@salesforce/schema/Account.Industry';
import Type_FIELD from '@salesforce/schema/Account.Type';

export default class UpdateRecordDemo extends LightningElement {
    formFields = {
        Name: '',
        Industry: '',
        Phone: '',
        Type: ''
    };

    changeHandler(event) {
        const { name, value } = event.target
        this.formFields = { ...this.formFields, [name]: value }
    }


    handleSave() {
        const fields = {};
        fields[ID_FIELD.fieldApiName] = '0010o00002jumbPAAQ'
        fields[NAME_FIELD.fieldApiName] = this.formFields.Name;
        fields[Phone_FIELD.fieldApiName] = this.formFields.Phone;
        fields[Industry_FIELD.fieldApiName] = this.formFields.Industry;
        fields[Type_FIELD.fieldApiName] = this.formFields.Type;

        // Creating record using uiRecordApi
        let recordInput = { fields }
        createRecord(recordInput)
            .then(result => {
                this.formFields = {};
                this.showToast('Success!!', 'Account Created Successfully!!', 'success')
                console.log('Account Created Id ===> ' + JSON.stringify(result.id));

            })
            .catch(error => {
                showToast('Failure!!', 'Something went wrong!!', 'error')
            });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }));
    }

}