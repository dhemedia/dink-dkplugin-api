/*
The storyId has to be an integer.
But since Angular apps (and other custom apps) are not using stories I suggest you use 1 for the first view,
2 for the second view etc in your app.
*/

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
var payloadJson = JSON.stringify(payload);
var eventString = 'NAME_OF_EVENT';
var storyId = 1;

DKPlugin.recordAnalyticEvent(storyId, eventString, payloadJson, successCallbackFn, failureCallbackFn);
