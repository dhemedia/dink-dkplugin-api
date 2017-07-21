module dk {

    /**
    @param result a json stringified IBasicResponse object,
    so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface ISetIsCrmOnlineSearchRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface ISetIsCrmOnlineSearchRequestFailureFn {
        (result: string): null;
    }

    export interface ISetIsCrmOnlineSearchRequest {
        successCallback: ISetIsCrmOnlineSearchRequestSuccessFn;
        failureCallback: ISetIsCrmOnlineSearchRequestFailureFn;
        callbackIdentifier?: string;
        isOnline: boolean;
    }

}
