import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = ['Contact.Twitter_Handle__c'];
export default class TwitterFeedComponentLwc extends LightningElement {
    @api recordId;
    @api twitterHandle = "karkra_nikhil"
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {
        if (data){
            this.twitterHandle = data.fields.Twitter_Handle__c.value
        }
        if(error){
            console.error(error)
        }
    }
    get fullUrl() {
        return `https://karkra-dev-ed--c.visualforce.com/apex/TwitterFeedPage?twitterHandle=${this.twitterHandle}`
    }
}