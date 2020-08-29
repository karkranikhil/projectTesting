import { LightningElement, wire, track } from 'lwc';
// import { loadStyle } from 'lightning/platformResourceLoader';
// import materialize from '@salesforce/resourceUrl/materialize.min.css';
import getTodoList from '@salesforce/apex/ToDoController.getTodoList';

export default class TodoAppComponent extends LightningElement {
    header=['Name', 'Age', 'Address', 'Actions']
    @track todoList

    @wire(getTodoList)
        wiredAccounts({ error, data }) {
            if (data) {
                this.todoList = data
            } else if (error) {
                console.log(error);
            }
        }
        


        // renderedCallback() {
        //     Promise.all([
        //         loadStyle(this, materialize)    
        //     ])
        //         .then(() => {
        //             console.log('materialize loaded')
        //         })
        // }
            
            
}