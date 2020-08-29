public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, AccountNumber, Phone FROM Account LIMIT 10];
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, AccountNumber FROM Account WHERE Name LIKE :key  LIMIT 10];
    }
}