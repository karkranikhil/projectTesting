import { LightningElement, api } from 'lwc';

export default class ProgressBarChildComponent extends LightningElement {
    defaultColor = "myBar";
    className = this.defaultColor;
    @api percentage;

    get getStyle() {
        return 'width:' + this.percentage + '%';
    }
}