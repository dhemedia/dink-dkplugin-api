module dk{

  export enum AddPdfToMicroSiteResultType {
    EMAIL = <any>'EMAIL',
    ACCOUNT_HUB = <any>'ACCOUNT_HUB'
  }

  export interface IAddPdfToMicroSiteResponse extends IBasicResponse {
    /**
      was the pdf sent by email, or added to account hub?
    */
    type: AddPdfToMicroSiteResultType;
  }

  /**
    @param result is a json stringified IAddPdfToMicroSiteResponse object
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
    /**
      Should the native app show alerts if there is a choice between email and account hub?
      Default is false.
     */
    suppressFeedback?: boolean;
  }
}
