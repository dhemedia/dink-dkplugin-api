module dk {

  export interface IPickAdditionalFilesForVisitReportResponse extends IBasicResponse {
      files: IDealPicForCrmRequest[];
  }

  /**
  @param result a json stringified IPickAdditionalFilesForVisitReportResponse object,
  so you'll need to parse the json before accessing the IPickAdditionalFilesForVisitReportResponse properties
  */
  export interface IPickAdditionalFilesForVisitReportSuccessFn {
      (result: string): null;
  }

  /**
    @param result is a json stringified IPickAdditionalFilesForVisitReportResponse object
  */
  export interface IPickAdditionalFilesForVisitReportFailureFn {
      (result: string): null;
  }

  export interface IPickAdditionalFilesForVisitReportRequest {
      successCallback: IGetPictureByUrlRequestSuccessFn;
      failureCallback: IGetPictureByUrlRequestFailureFn;
      callbackIdentifier?: string;
  }

}
