module dk {

    export interface IGetFileResponse extends IGetLocalFileResponse {
        /** Information about the last time this file was updated, if provided when storing */
        lastClientUpdate: string;
    }

    /**
    @param result a json stringified IGetFileResponse object,
    so you'll need to parse the json before accessing the IGetFileResponse properties
    */
    export interface IGetFileRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetFileRequestFailureFn {
        (result: string): null;
    }

    export interface IGetFileRequest {
        successCallback: IGetFileRequestSuccessFn;
        failureCallback: IGetFileRequestFailureFn;
        callbackIdentifier?: string;
        fileName: string;
        /** Limit the scope of the file being requested, to a specific publication.
            Empty string is equal to current publication (if available).
        */
        publicationKey?: string;
    }

}
