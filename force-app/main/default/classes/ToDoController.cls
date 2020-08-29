public with sharing class ToDoController {
    @AuraEnabled(cacheable=true)
    public static List<TodoApp__c> getTodoList(){
        return [SELECT  Name__c,Age__c,Address__c FROM TodoApp__c];
    }

    @AuraEnabled
    public static String saveTodoList(TodoApp__c todoList){
        String message;
        Database.saveResult sr = Database.insert(todoList,false);
        if(!sr.isSuccess()){
            for(Database.error err : sr.getErrors()){
                message += err.getMessage();
            }
        }
        return message;
    }
}