({
    publishMC: function (cmp) {
        let msg = cmp.get("v.messageValue")
        var message = {
            lmsData: {
                value: msg
            }
        };
        cmp.find("sampleMessageChannel").publish(message);
    },
    handleMessage: function (cmp, message, helper) {
        // Read the message argument to get the values in the message payload
        if (message != null && message.getParam("lmsData") != null) {
            console.log(message.getParam("lmsData").value)
            cmp.set("v.recordValue", message.getParam("lmsData").value);
        }
    },
    inputHandler: function (cmp, event, helper) {
        console.log(event.target.value)
        cmp.set("v.messageValue", event.target.value)
    }
})