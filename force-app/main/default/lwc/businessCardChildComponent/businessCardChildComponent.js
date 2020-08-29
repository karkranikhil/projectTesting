import { LightningElement, api } from 'lwc';

export default class BusinessCardChildComponent extends LightningElement {
    _users =[]
    @api
    get userDetails() {
        return this._users;
    }
    set userDetails(value) {
        this._users = value;
    }
}