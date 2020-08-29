import { LightningElement, wire } from 'lwc';

//lightning/uiListApi Adapter to get the list view details.
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetListUiDemo extends LightningElement {
    accResult
    @wire(getListUi, {
        objectApiName: ACCOUNT_OBJECT,
        listViewApiName: 'AllAccounts'
    })
    wiredlistView({
        error,
        data
    }) {
        if (data) {
            console.log(data)
            this.accResult = data.records.records;
        } else if (error) {
            console.error(error)
            this.error = error;
        }
    };
}