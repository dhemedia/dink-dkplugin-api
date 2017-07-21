module dk {
    
    export interface IAnalyticsRecordAnswer {
        Id: string;
        Subject: string;
        Comments: string;
        Username: string;
        Publications: IDealPublicationForCrmRequest[];
        Pics: IDealPicForCrmRequest[];
        Events: IDealEventForCrmRequest[];
        Microsites: IDealMicrositeForCrmRequest[];
    }

    export interface IGetVisitAnalyticsReportsResponse extends IBasicResponse {
        reports: IAnalyticsRecordAnswer[];
    }

    /**
    @param result a json stringified IGetVisitAnalyticsReportsResponse object,
    so you'll need to parse the json before accessing the IGetVisitAnalyticsReportsResponse properties
    */
    export interface IGetVisitAnalyticsReportsRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetVisitAnalyticsReportsRequestFailureFn {
        (result: string): null;
    }

    export interface IGetVisitAnalyticsReportsRequest {
        successCallback: IGetVisitAnalyticsReportsRequestSuccessFn;
        failureCallback: IGetVisitAnalyticsReportsRequestFailureFn;
        callbackIdentifier?: string;
        dinkEntityName: string;
        regardingId: string;
    }

}
