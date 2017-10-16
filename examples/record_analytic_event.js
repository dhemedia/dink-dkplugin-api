var successCallbackFn = function(result) {
    var s = angular.fromJson(result);
    console.log(s.result);
}

var failureCallbackFn = function(result) {
    console.log("not ok");
};

var payload = {
    test: 'some_value'
};

/*
The storyKey has to be an integer.
But since custom apps are not using stories I suggest you use always use '1'.
More info at : https://dhemedia.github.io/dink-dkplugin-api/interfaces/dk.ianalyticeventrequest.html
*/

var obj = {
    storyKey: 1,
    eventString: 'NAME_OF_EVENT',
    payload: JSON.stringify(payload),
    successCallback: successCallbackFn,
    failureCallback: failureCallbackFn,
    callbackIdentifier: 'MY_CALLBACK_ID'
};

DKPlugin.recordAnalyticEventV2(obj);
