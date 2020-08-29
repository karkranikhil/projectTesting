({
    doInit : function(component,event, helper) {
        var stringItems=[{"OrderId":'IDDDDDDDDDDDD', "OrderType":'jhhjh', 
                        "CompletionDate":"jjgjghj", "OrderStatus":"jhj"
                        }]
                component.set("v.orderList", stringItems);  
    },
    getOrderDetails : function(component,event, helper) {
       
        alert('going to get order details');
       
        var orderId = event.target.dataset.orderid;
        alert('orderId is : +'+orderId);
        var accId = component.get("v.recordId");
       component.set("v.isOpen", true);
    },
    getOrderReturnDetails : function(component,event, helper) {
        var orderId = event.target.dataset.orderid;
        alert('ReturnorderId :+'+orderId);
        var accId = component.get("v.recordId");
        var action = component.get('c.getReturnOrdDetails');
        action.setParams({
            orderId : orderId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            alert('State:'+ state);
            if (state === "SUCCESS") {
                var stringItems = response.getReturnValue();
                //  alert('stringItems :'+ JSON.stringify(stringItems));
                component.set("v.orderReturnDetails", stringItems);
            }
        });
        $A.enqueueAction(action);
    },
    closeModel : function(component,event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.isOpen", false);
    },
    viewRecord : function(component,event, helper) {
        alert('inside viewRecord');
        var row = event.getParam('row');
        var recordId = row.Id;
        var navEvt = $A.get("event.force:navigateToSObject");
        navEvt.setParams({
            "recordId": recordId,
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
})