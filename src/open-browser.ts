module dk{

  export interface IOpenBrowserResponse{
    /**
    * result indicates if call was successful
    */
    result:boolean;
    message:string;
    /**
      cbId is the callbackIdentifier that was passed in, only present if
      that callbackIdentifier was not empty
    */
    cbId:string;
  }

  /**
    @param result is a json stringified IOpenBrowserResponse object
  */
  export interface IOpenBrowserRequestSuccessFn {
      (result: string): null;
  }

  /**
    @param result is a json stringified IOpenBrowserResponse object
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
