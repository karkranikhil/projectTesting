import { LightningElement, track } from 'lwc';
import { APPLICATION_SCOPE, publish, createMessageContext, releaseMessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
export default class LwcDemoLwc extends LightningElement {
    context = createMessageContext();
    inputValue=''
    subscription = null;
    receivedMessage = '';

    inputHandler(event){
        this.inputValue = event.target.value
    }
    publishMC() {
        const message = {
            lmsData:  { 
                value: this.inputValue
            }
        };
        publish(this.context, SAMPLEMC, message);
    }
    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            console.log(JSON.stringify(message))
            this.handleMessage(message);

        }, { scope: APPLICATION_SCOPE });
    }
     //({ scope: APPLICATION_SCOPE }) to receive messages on a message channel from anywhere in the application.

    unsubscribeMC() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleMessage(message) {
        this.receivedMessage = message && message.lmsData ? message.lmsData.value :'No Payload'
    }

    disconnectedCallback() {
        releaseMessageContext(this.context);
    }


}