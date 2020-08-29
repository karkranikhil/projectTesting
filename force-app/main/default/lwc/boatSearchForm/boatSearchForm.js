import { LightningElement, wire, track } from 'lwc';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';
export default class BoatSearchForm extends LightningElement {
    selectedBoatTypeId = '';

    // Private
    error = undefined;

    // Needs explicit track due to nested data
    @track searchOptions=[];

    // Wire a custom Apex method
    @wire(getBoatTypes)
    boatTypes({ error, data }) {
        if (data) {
            console.log(data)
            this.searchOptions = data.map(item => {
                return { label: item.Name, value: item.Id }
            });
            // data.forEach(item=>{
            //     this.searchOptions.push({ label: item.Name, value: item.Id })
            // })
            this.searchOptions.unshift({ label: 'All Types', value: '' });
            console.log(this.searchOptions)
        } else if (error) {
            this.searchOptions = undefined;
            this.error = error;
        }
    }

    // Fires event that the search option has changed.
    // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
    handleSearchOptionChange(event) {
        console.log("event.detail.value", event.detail.value)
        this.selectedBoatTypeId = event.detail.value
        const searchEvent = new CustomEvent('search', {
            detail: {
                boatTypeId:event.target.value
            }
        });
        this.dispatchEvent(searchEvent);
    }
}