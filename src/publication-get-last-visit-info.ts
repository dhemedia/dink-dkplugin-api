module dk {

    export interface IPublicationVisitInfo {
        nrOfPages: number;
        lastPage: number;
        lastViewedPage: number;
        publicationKey: string;
        creationDateUtc: string;
        pagesViewed: number[];
    }

    export interface IGetLastVisitInfoResponse extends IBasicResponse {
        info: IPublicationVisitInfo;
    }

    /**
    @param result a json stringified IGetLastVisitInfoResponse object,
    so you'll need to parse the json before accessing the IGetLastVisitInfoResponse properties
    */
    export interface IGetLastVisitInfoRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetLastVisitInfoRequestFailureFn {
        (result: string): null;
    }

    export interface IGetLastVisitInfoRequest {
        /** The key/reference of the target publication, even the title can be passed in */
        publicationKey?: string;
        successCallback: IGetLastVisitInfoRequestSuccessFn;
        failureCallback: IGetLastVisitInfoRequestFailureFn;
        /** callbackIdentifier allows you to distinguish between different callbacks */
        callbackIdentifier?: string;
    }
}