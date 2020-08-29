import { LightningElement, api, wire } from 'lwc';
import getSimilarBoats from '@salesforce/apex/BoatDataService.getSimilarBoats';
import { NavigationMixin } from 'lightning/navigation';
export default class SimilarBoats extends NavigationMixin(LightningElement) {
    // Private
    currentBoat;
    relatedBoats;
    boatId;
    error;

    // Public Getter and Setter to allow for logic to run on recordId change
    @api
    get recordId() {
        return this.boatId;
    }
    set recordId(value) {
        this.setAttribute('boatId', value);
        this.boatId = value;
    }


    // public
    @api similarBy;

    // Wire custom Apex call, using the import named getSimilarBoats
    // Populates the relatedBoats list
    @wire(getSimilarBoats, { boatId: '$boatId', similarBy:'$similarBy'})
    similarBoats({ error, data }) { 
        console.log("similarBoats", data)
        if(data){
            this.relatedBoats = data
        }
        if(error){
            this.error=error
        }
    }
    get getTitle() {
        return 'Similar boats by ' + this.similarBy;
    }
    get noBoats() {
        return !(this.relatedBoats && this.relatedBoats.length > 0);
    }

    // Navigate to record page
    openBoatDetailPage(event) {
        
        let boatId = event.detail.boatId;
        event.preventDefault();
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: boatId,
                actionName: 'view',
            },
        });
     }
}
