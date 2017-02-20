module dk{

  export interface IAddPdfToMicroSiteResponse{
    /**
    * result indicates if call was successful
    */
    result:boolean;
    message:string;
    /**
      cbId is the callbackIdentifier that was passed in, only present if
      that callbackIdentifier was not empty
    */
    cbId?:string;
  }


  /**
    @param result is a json stringified IAddPdfToMicroSiteResponse object
  */
  export interface IAddPdfToMicroSiteSuccessFn {
      (result: string): null;
  }

  /**
    @param result is a json stringified IAddPdfToMicroSiteResponse object
  */
  export interface IAddPdfToMicroSiteFailureFn {
      (result: string): null;
  }

  export interface IAddPdfToMicroSiteRequest{
    successCallback: IAddPdfToMicroSiteSuccessFn;
    failureCallback: IAddPdfToMicroSiteFailureFn;
    fileName:string;
    callbackIdentifier?: string;
    publicationKey?: string;
  }
}
