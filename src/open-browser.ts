module dk{

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

  export interface IOpenBrowserRequest{
    successCallback: IOpenBrowserRequestSuccessFn;
    failureCallback: IOpenBrowserRequestFailureFn;
    url:string;
    callbackIdentifier?: string;
  }

}
