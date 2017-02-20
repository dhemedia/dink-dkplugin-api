module dk{
  /**
  * DKPlugin is the API offered to communicate from Javascript to native code
  */
  export interface DKPlugin{

    getEnterpriseDetails(
      obj: IEnterpriseDetailsRequest
    ): void;

    getCredentials(
      successCallbackFn:ICredentialsSuccessFn,
      failureCallbackFn:ICredentialsFailureFn
    ):void;

    getPublicationDetails(
      publicationReference:string,
      successCallbackFn:IPublicationDetailsSuccessFn,
      failureCallbackFn:IPublicationDetailsFailureFn
    ):void;

    recordAnalyticEventV2(
      obj:IAnalyticEventRequest
    ):void;

    openPublication(
      obj:IOpenPublicationRequest
    ):void;

    showPdfDocument(
      pdfName:string,
      pageNumber:number,
      successCallbackFn:IShowPdfDocumentSuccessFn,
      failureCallbackFn:IShowPdfDocumentFailureFn
    ):void;

    showRemotePdfDocument(
      obj:IShowRemotePdfDocumentRequest
    ):void;

   /**
   * recordStats will gather stats per page.
   * @param stat should be a json stringified IVisit object.
   */
    recordStats(
       publicationReference:string,
       stat:string,
       successCallbackFn:IRecordStatsSuccessFn,
       failureCallbackFn:IRecordStatsFailureFn
    ):void;
  }
}
