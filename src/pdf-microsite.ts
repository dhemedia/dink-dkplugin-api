module dk{

  /**
    @param result is a json stringified IBasicResponse object
  */
  export interface IAddPdfToMicroSiteSuccessFn {
      (result: string): null;
  }

  /**
    @param result is a json stringified IBasicResponse object
  */
  export interface IAddPdfToMicroSiteFailureFn {
      (result: string): null;
  }

  export interface IAddPdfToMicroSiteRequest{
    successCallback: IAddPdfToMicroSiteSuccessFn;
    failureCallback: IAddPdfToMicroSiteFailureFn;
    fileName:string;
    callbackIdentifier?: string;
    /** The key/reference of the target publication */
    publicationKey?: string;
    /** The name of the target publication, is required when publicationKey is missing*/
    publicationName?: string;
  }
}
