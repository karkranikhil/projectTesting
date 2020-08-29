({
    isFocusedTabSubtab : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            workspaceAPI.setTabLabel({
                tabId: focusedTabId,
                label: "onload Tab"
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    isFocusedTabSubtab1 : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            workspaceAPI.setTabLabel({
                tabId: focusedTabId,
                label: "onclick Tab"
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})