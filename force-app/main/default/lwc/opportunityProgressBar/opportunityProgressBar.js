import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_OBJ from '@salesforce/schema/Opportunity';
export default class OpportunityProgressBar extends LightningElement {
    @api recordId
    @api objectApiName;
    @wire(getRecord, { recordId: '$recordId', fields: 'Opportunity.StageName' })
    opps;
    renderedCallback() {
        console.log(JSON.stringify(this.opps))
        console.log(JSON.stringify(this.recordId))
    }
    @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJ })
    objectInfo({ data, error }) {
        if (data) {
            console.log(JSON.stringify(data))
        }
        if (error) {
            console.log
        }
    }

}