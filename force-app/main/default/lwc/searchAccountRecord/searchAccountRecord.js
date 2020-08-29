/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class SearchAccountRecord extends LightningElement {
    @track accounts;
    @track accountDetailsLoad = false;
    handleLoad() {
        getAccountList()
            .then(result => {
                this.accounts = result;
                this.accountDetailsLoad = true
            })
            .catch(error => {
                console.error(error)
            });
    }

}
// export default class SearchAccountRecord extends LightningElement {
//     @wire(getAccountList)
//     wiredAccounts({ error, data }) {
//         if (data) {
//             this.accounts = data;
//         } else if (error) {
//             console.log(error);
//         }
//     }
// }