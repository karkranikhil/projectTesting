({
	handleRecordUpdated : function(component, event, helper) {
		if(component.get('v.recordId'))
            if(component.get("v.simpleRecord.Twitter_Handle__c"))
            {
                component.set("v.twitterHandle",component.get("v.simpleRecord.Twitter_Handle__c"));
                //alert(component.get("v.twitterHandle"));
            }
	}

})