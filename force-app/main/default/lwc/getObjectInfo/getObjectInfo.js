import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
// Use this wire adapter to get metadata about a specific object.The response includes metadata describing fields, child relationships, record type, and theme.
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetObjectInfo extends LightningElement {
    @api recordId;
    @api objectApiName;
    businessId
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo({data, error}){
        if(data){
            console.log(data)
            let infos = data.recordTypeInfos
            this.businessId = Object.keys(infos).find(info => infos[info].name === 'Business Account')
        }
        if(error){
            console.log
        }
    };
}