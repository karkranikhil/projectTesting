//A list is a collection of elements, such as Integers, Strings, objects, or other collections. Use a list when the sequence of elements is important. You can have duplicate elements in a list.


public with sharing class newsController {
    @AuraEnabled
    public static Map<String, Object> retriveNews(){
        //will Use the HttpRequest class to programmatically create HTTP requests
        HttpRequest httpRequest = new HttpRequest();  
        httpRequest.setEndpoint('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8f97a0b030bd441fa4272884260e764b');
        httpRequest.setMethod('GET');  

        // Lets create a newsJsonData variable of type map
        //To declare a map, use the Map keyword followed by the data types of the key and the value within <> characters.
        // Create an instance newJsonData of type Map.
        Map<String, Object> newsJsonData= new Map<String, Object>();
        String strResponse = null;
        
            try {  
                //will Use the Http class to initiate an HTTP request and response
                Http http = new Http();  
                // send is the method of http that sends and Http Request and returned the response 
                //Use the HttpResponse class to handle the HTTP response returned by the Http class. 
                
                HttpResponse httpResponse = http.send(httpRequest);  
                if (httpResponse.getStatusCode() == 200 ) {  
                    strResponse = httpResponse.getBody();  
                } 
                else {  
                    //Built-in exception  CalloutException. Any problem with a Web service operation, such as failing to make a callout to an external system.
                    throw new CalloutException(httpResponse.getBody());  
                }   
            } 
            catch(Exception ex) {  
                throw ex;  
            }  

        if(!String.isBlank(strResponse)) {
            newsJsonData = (Map<String, Object>)JSON.deserializeUntyped(strResponse);
            System.debug('newsJsonData ===> '+newsJsonData);
        }

        if(!newsJsonData.isEmpty()) {
            return newsJsonData;
        }
        else {
            return null;
        }
    }
}