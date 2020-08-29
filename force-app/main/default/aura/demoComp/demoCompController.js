({
    doInit : function(component, event,helper) {
helper.doInit(component,event, helper);
    },
    getOrderDetails : function(component, event, helper){
        /*var orderId = event.target.dataset.orderid;
        alert(orderId);*/
        helper.getOrderDetails(component,event, helper);
    },
    getOrderReturnDetails : function(component, event, helper){
        helper.getOrderReturnDetails(component,event, helper);
    },
    closeModel: function(component, event, helper) {
        helper.closeModel(component,event, helper);
   },
       handleNext : function(component, event, helper) {
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber+1);
        helper.doInit(component,event, helper);
    },
     
    handlePrev : function(component, event, helper) {        
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber-1);
        helper.doInit(component, helper);
    },
     handleRowAction: function (component, event, helper) {
        var action = event.getParam('action');
        switch (action.name) {
            case 'view':
                helper.getOrderDetails(component, event);
                break;
        }
    },
 
})