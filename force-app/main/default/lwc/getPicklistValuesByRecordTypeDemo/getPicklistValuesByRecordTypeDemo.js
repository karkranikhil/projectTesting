import { LightningElement, wire } from 'lwc';
// Use this wire adapter to get the values for every picklist of a specified record type.
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
    picklistvalue
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$objectInfo.data.defaultRecordTypeId'})
    accountPicklists({data, error}){
        if(data){
            console.log(data)
            this.currencyIsoCodeValues = data.picklistFieldValues.CurrencyIsoCode
        }
    }

    handleChange(event) {
        this.picklistvalue = event.detail.value;
    }
}