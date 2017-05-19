module dk {

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IOpenBrowserRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IOpenBrowserRequestFailureFn {
        (result: string): null;
    }

    export interface IOpenBrowserRequest {
        successCallback: IOpenBrowserRequestSuccessFn;
        failureCallback: IOpenBrowserRequestFailureFn;
        url: string;
        /**
          Indicates if you want to refresh the previous publication upon exiting/closing the browser,
          default value is false
        */
        refreshWhenReturningToPublication?: boolean;
        callbackIdentifier?: string;
    }

}
