import { LightningElement, api, wire } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INTERVIEW_OBJECT from '@salesforce/schema/Interviewer__c';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getRecord } from 'lightning/uiRecordApi'
const FIELDS = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email',
]
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
export default class WireAdapterDemo extends LightningElement {
    @api recordId;
    @api objectApiName
    ID = USER_ID
    @wire(getObjectInfo, { objectApiName: '$objectApiName' }) objectInfo;
    // @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT }) accObjectInfo;
    @wire(getRecord, { recordId: '$recordId', fields: ACCOUNT_NAME_FIELD })
    accObjectInfo
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    contact;
    // get objectInfoStr() {
    //     return this.objectInfo ?
    //         JSON.stringify(this.objectInfo.data, null, 2) :
    //         '';
    // }
    get accObjectInfoStr() {
        return this.accObjectInfo ?
            JSON.stringify(this.accObjectInfo.data, null, 2) :
            '';
    }
    get contactArrFields() {
        console.log(this.contact)
        return this.contact ?
            this.contact.data.fields :
            [];
    }
    connectedCallback() {
        console.log(ACCOUNT_OBJECT)
        console.log(INTERVIEW_OBJECT)
    }
}