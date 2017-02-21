module dk {

    export interface IGetLocalPdfDocumentsResponse extends IBasicResponse {
        /** files is a list of local pdf files*/
        files: string[];
    }

    /**
    @param result a json stringified IGetLocalPdfDocumentsResponse object,
    so you'll need to parse the json before accessing the IGetLocalPdfDocumentsResponse properties
    */
    export interface IGetLocalPdfDocumentsSuccessFn {
        (result: string): null;
    }

    /**
    @param result a json stringified IBasicResponse object,
    so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface IGetLocalPdfDocumentsFailureFn {
        (result: string): null;
    }

    export interface IGetLocalPdfDocumentsRequest {
        successCallback: IGetLocalPdfDocumentsSuccessFn;
        failureCallback: IGetLocalPdfDocumentsFailureFn;
        callbackIdentifier?: string;
        publicationKey?: string;
    }
}
