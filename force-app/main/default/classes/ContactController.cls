public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static void getContacts() {
        try {
            integer a = 1 / 0; // Division by zero causes exception
        }
        catch (Exception e) {
            // "Convert" the exception into an AuraHandledException
            throw new AuraHandledException('Forced error');    
    }
    //     [
    //         SELECT FirstName, LastName, Email
    //         FROM Contact
    //    ];
    }
}