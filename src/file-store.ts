module dk {

    export interface IStoreFileResponse extends IBasicResponse {
        /** path is the absolute path to the local file that was created */
        path: string;
    }

    /**
    @param result a json stringified IStoreFileResponse object,
    so you'll need to parse the json before accessing the IStoreFileResponse properties
    */
    export interface IStoreFileRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IStoreFileRequestFailureFn {
        (result: string): null;
    }

    export interface IStoreFileRequest {
        successCallback: IStoreFileRequestSuccessFn;
        failureCallback: IStoreFileRequestFailureFn;
        callbackIdentifier?: string;
        fileName: string;
        fileType: LocalFileType;
        /** The contents of the file, a base-64 encoded string if png, jpg or pdf */
        fileContent: string;
        daysUntilExpiration: number;
        /** Limit the scope of the file to a specific publication.
            Empty string is equal to current publication (if available)
        */
        publicationKey?: string;
        /** Should existing files with the same name be overwritten? Default is false */
        overwriteExistingFile?: boolean;
        /** Information about the last time this file was updated.
            Handy when deciding if the file should be updated.
        */
        lastClientUpdate?: string;
    }

}
