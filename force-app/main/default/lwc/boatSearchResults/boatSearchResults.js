import { LightningElement, api, wire, track } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { publish, MessageContext } from 'lightning/messageService';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';
import BOATMC from '@salesforce/messageChannel/BoatMessageChannel__c';
const columns = [
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Length', fieldName: 'Length__c', type: 'number', editable: true },
    { label: 'Price', fieldName: 'Price__c', type: 'currency', editable: true },
    { label: 'Description', fieldName: 'Description__c', type: 'text', editable: true }
];
export default class BoatSearchResults extends LightningElement {
    selectedBoatId = '';
    columns = columns;
    boats = '';
    isLoading = true
    draftValues = [];
    @api boatTypeId = '';

    @wire(MessageContext)
    messageContext;
    @wire(getBoats, { boatTypeId: '$boatTypeId' })
    wiredBoats(result) {
        console.log("wiredBoats called")
        this.boats = result
        this.notifyLoading(false)
     }

    @api 
    searchBoats(boatTypeId) {
        this.boatTypeId = boatTypeId;
        this.notifyLoading(true);
    }

    // this public function must refresh the boats asynchronously
    // uses notifyLoading
    @api 
    async refresh() {
        this.notifyLoading(true)
         return await refreshApex(this.boats);
    }

    // this function must update selectedBoatId and call sendMessageService
    updateSelectedTile(event) {
        this.selectedBoatId = event.detail.boatId;
        this.sendMessageService(this.selectedBoatId)
    }

    // Publishes the selected boat Id on the BoatMC.
    sendMessageService(boatId) {
        const message = {
            recordId: boatId
        }
        publish(this.messageContext, BOATMC, message);
    }

    // This method must save the changes in the Boat Editor
    // Show a toast message with the title
    // clear lightning-datatable draft values
    handleSave(event) {
        this.notifyLoading(true)
        const recordInputs = event.detail.draftValues.slice().map(draft => {
            const fields = Object.assign({}, draft);
            return { fields };
        });
        const promises = recordInputs.map(recordInput => updateRecord(recordInput));
        Promise.all(promises)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Ship It!',
                        variant: 'success'
                    })
                );
                this.draftValues = [];
                this.notifyLoading(false)
                //return refreshApex(this.wiredBoats);
                 return this.refresh()
            })
            .catch(error => {
                this.notifyLoading(false)
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            })
            .finally(() => { });
    }
    // Check the current value of isLoading before dispatching the doneloading or loading custom event
    notifyLoading(isLoading) {
        // this.isLoading = isLoading
        console.log("isLoading", isLoading)
        if (isLoading) {
            this.dispatchEvent(new CustomEvent('loading', {detail: {isLoading: isLoading}}))
        } else {
            this.dispatchEvent(new CustomEvent('doneloading', { detail: { isLoading: isLoading }}))
        }
    }
}