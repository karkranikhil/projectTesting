public with sharing class UserInfoDetails {
    @AuraEnabled(cacheable=true)
    public static User getUserDetails(String recId) {
        return  [Select Id , Name ,Email from User where Id =: recId];
    }

    
    

    @AuraEnabled(cacheable=true)
    public static List <profile__mdt> getLayoutDetails(String type) {
        List<profile__mdt> profilelist;
        profilelist = new List<profile__mdt>();
        String query = 'SELECT MasterLabel FROM profile__mdt where ' + type + '= true';
        profilelist = Database.query(query);
        return profilelist;
    }
}