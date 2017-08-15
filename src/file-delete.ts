module dk {

    /**
    @param result a json stringified IBasicResponse object,
    so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface IDeleteFileRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IDeleteFileRequestFailureFn {
        (result: string): null;
    }

    export interface IDeleteFileRequest {
        successCallback: IDeleteFileRequestSuccessFn;
        failureCallback: IDeleteFileRequestFailureFn;
        callbackIdentifier?: string;
        fileName: string;
        /** Limit the scope of the file being deleted, to a specific publication.
            Empty string is equal to current publication (if available).
        */
        publicationKey?: string;
    }

}
