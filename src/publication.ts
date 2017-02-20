module dk{

  export interface IOpenPublicationSuccessResponse{
    cbId:string;
  }

  export interface IOpenPublicationFailureResponse{
    /** The error code */
    code:string;
    cbId:string;
  }

  export interface IOpenPublicationSuccessFn{
      (result: string): null;
  }

  /**
    @param result is a json stringified IOpenPublicationFailureResponse object
  */
  export interface IOpenPublicationFailureFn{
      (result: string): null;
  }

  /**
  This method allows users to open other publications from within a publication
  */
  export interface IOpenPublicationRequest{
    /** The key of the story on which we like to open the publication */
    storyKey?: string;
    /** The key/reference of the target publication */
    publicationKey? : string;
    /** The name of the target publication, is required when publicationKey is missing*/
    publicationName? : string;
    successCallback: IOpenPublicationSuccessFn;
    failureCallback: IOpenPublicationFailureFn;
    /** callbackIdentifier allows you to distinguish between different callbacks */
    callbackIdentifier?: string;
  }
}
