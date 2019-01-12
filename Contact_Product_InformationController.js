({
    loadCaseDetails : function(component, event, helper) {
        var action = component.get("c.getCaseDetails");
        action.setParams({
            "caseId": component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            if(response.getState()==="SUCCESS" && component.isValid()){
                component.set("v.caseDetails",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
	setOutput : function(component, event, helper) {
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
             "recordId": component.get("v.recordId")
        });
        editRecordEvent.fire();
	}
    
})