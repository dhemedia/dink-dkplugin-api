module dk {

    export interface IGetCrmConfigurationResponse extends IBasicResponse {
        crmUser: string;
        serviceUrl: string;
        organizationSvc: string;
        consumerKey: string;
        consumerSecret: string;
    }

    /**
    @param result a json stringified IGetCrmConfigurationResponse object,
    so you'll need to parse the json before accessing the IGetCrmConfigurationResponse properties
    */
    export interface IGetCrmConfigurationSuccessFn {
        (result: string): null;
    }

    /**
    @param result is a json stringified IBasicResponse object
    */
    export interface IGetCrmConfigurationFailureFn {
        (result: string): null;
    }

    export interface IGetCrmConfigurationRequest {
        successCallback: IGetCrmConfigurationSuccessFn;
        failureCallback: IGetCrmConfigurationFailureFn;
        callbackIdentifier?: string;
    }
}
