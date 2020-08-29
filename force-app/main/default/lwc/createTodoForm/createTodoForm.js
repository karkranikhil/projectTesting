import { LightningElement,track } from 'lwc';
//import saveTodoList from '@salesforce/apex/ToDoController.saveTodoList';
const defaulForm={
    Name_c:null,
    Age__c:null,
    Address__c:null
}
export default class CreateTodoForm extends LightningElement {
    @track todoFormDetail=defaulForm
    changeHandler(event){
        this.todoFormDetail[event.target.name] = event.target.value
    }
    formSubmit(evt){
        evt.preventDefault();
        console.log(this.todoFormDetail)
        // saveTodoList(this.todoFormDetail)
        //     .then(result => {
        //         console.error(result)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     });
    }
}