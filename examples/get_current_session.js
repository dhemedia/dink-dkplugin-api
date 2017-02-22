var obj = {
    successCallback: function(result) {
        var s = angular.fromJson(result);
        if (s.hasOwnProperty('customer')) {
            console.log(s.customer.name);
        }
    },
    failureCallback: function(result) {
        console.log("not ok");
    },
    callbackIdentifier: 'your_callback_identifier'
};

DKPlugin.getCurrentSession(obj);
