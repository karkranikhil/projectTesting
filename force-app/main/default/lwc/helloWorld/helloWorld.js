import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track greeting = 'World';
    fullname="Nikhil karkra"
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}