module dk {

  export interface IGetEntityRelatedDocumentsResponse extends IBasicResponse {
      documents: IEntityDocumentItem[];
  }

  /**
  @param result a json stringified IGetEntityRelatedDocumentsResponse object,
  so you'll need to parse the json before accessing the IGetEntityRelatedDocumentsResponse properties
  */
  export interface IGetEntityRelatedDocumentsRequestSuccessFn {
      (result: string): null;
  }

  /**
    @param result is a json stringified IBasicResponse object
  */
  export interface IGetEntityRelatedDocumentsRequestFailureFn {
      (result: string): null;
  }

  export interface IGetEntityRelatedDocumentsRequest {
      successCallback: IGetEntityRelatedDocumentsRequestSuccessFn;
      failureCallback: IGetEntityRelatedDocumentsRequestFailureFn;
      callbackIdentifier?: string;
      dinkEntityName: string;
      id: string;
      forceRefresh?: boolean;
  }

}
