public class linkedin_integration {
    public String clientId {set;get;}
    public String clientSecret {set;get;}
    public String redirectUrl {set;get;}
    public String code {set;get;}
    public String accessToken {set;get;}
    public String result {set;get;}
    public String UserInfo { get; set; }
    
    public Final String client_id = '86birnd1s5r30l'; // Your Client Id here
    public Final String client_secret ='uw9hyXuWpHdwrWWR'; // Your Client Secret here
    
    //URLS
    public Final String REDIRECT_URI='https://ap4.salesforce.com/apex/linkedinVFPage';
    public Final String LINKEDIN_AUTH_URL = 'https://www.linkedin.com/oauth/v2/authorization';
    public Final String LINKEDIN_ACCESS_TOKEN_URL = 'https://www.linkedin.com/oauth/v2/accessToken';
    public Final String GET_LOGIN_USER_URL = 'https://api.linkedin.com/v2/me';
    
    
    public linkedin_integration(){
        redirectUrl = REDIRECT_URI;
    }
    public PageReference requestCode(){
        String Url =LINKEDIN_AUTH_URL;
        url=url+'?response_type=code';
        url=url+'&client_id='+client_id;
        url=url+'&redirect_uri='+redirectUrl;
        url=url+'&scope=r_liteprofile r_emailaddress';
        PageReference p = new PageReference(url);
        return p;
    }
    public void getAuthCode(){
        code = Apexpages.currentPage().getParameters().get('code');
    }
    public void requestToken(){
         System.debug('#### requestToken ');
        String endpoint = LINKEDIN_ACCESS_TOKEN_URL;
        Http http = new Http();
        HttpRequest httpReq = new HttpRequest();
        HttpResponse httpRes = new HttpResponse();
        
         String body='grant_type=authorization_code'; //the value of grant_type field should always be: authorization_code
        body=body+'&redirect_uri='+redirectUrl; //redirect_uri is same that we used in above
        body=body+'&client_id='+client_id; //The Client ID value generated in above
        body=body+'&client_secret='+client_secret; //The Secret Key value generated above
        body=body+'&code='+code; //The authorization code you received
        
        
        httpReq.setMethod('POST');
        httpReq.setEndpoint(endpoint);
        httpReq.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpReq.setBody(body);
        httpRes = http.send(httpReq);
         if(httpRes.getStatusCode() == 200){
                Map<String,object> TokenInfo = (Map<String,object>)JSON.deserializeUntyped(httpRes.getBody());
                accessToken =  String.valueOf(TokenInfo.get('access_token'));
            } else{
                UserInfo = 'Unexpected Error while communicating with LinkedIn API. '+'Status '+httpRes.getStatus()+' and Status Code '+httpRes.getStatuscode();
            }
    }
    public void getData(){
        System.debug('#### getData called');
        String endPoint = GET_LOGIN_USER_URL;
         Http http = new Http();
        HttpRequest httpReq = new HttpRequest();
        HttpResponse httpRes = new HttpResponse();
        
        httpReq.SetMethod('GET');
        httpReq.setEndpoint(GET_LOGIN_USER_URL);
        httpReq.setHeader('Authorization', 'Bearer '+accessToken);
        httpReq.setHeader('Content-Type', 'application/json');
        
        
        try{
            httpRes = http.send(httpReq);
            if(httpRes.getStatusCode() == 200){
                Map<String,object> TokenInfo = (Map<String,object>)JSON.deserializeUntyped(httpRes.getBody());
                String firstName = String.valueOf(TokenInfo);
                String lastName = String.valueOf(TokenInfo.get('lastName'));
                String headline = String.valueOf(TokenInfo.get('headline'));
                UserInfo = firstName;
            }else{
                UserInfo = 'Unexpected Error while communicating with LinkedIn API. '
                                    +'Status '+httpRes.getStatus()+' and Status Code '+httpRes.getStatuscode();
            }
        } catch(System.Exception e){
            System.debug('#### Exception Excuted '+e.getStackTraceString()+'  '+e.getMessage());
        }
    }
}