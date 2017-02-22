module dk {

    export interface IStorePdfAsLocalFileResponse extends IBasicResponse {
        /** path is the absolute path to the local file that was created */
        path: string;
    }

    /**
    @param result a json stringified IStorePdfAsLocalFileResponse object,
    so you'll need to parse the json before accessing the IStorePdfAsLocalFileResponse properties
    */
    export interface IStorePdfAsLocalFileSuccessFn {
        (result: string): null;
    }

    /**
      @param result a json stringified IBasicResponse object,
      so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface IStorePdfAsLocalFileFailureFn {
        (result: string): null;
    }

    export interface IStorePdfAsLocalFileRequest {
        /** publicationKey is the key of the publication or an empty string (=current publication)*/
        publicationKey: string;
        /** the identifier (=name in database) that should given to this new local file*/
        fileIdentifier: string;
        /** the name of the pdf we want to save as a local file */
        pdfFileName: string;
        /**
          daysUntilExpiration determines when the local file should be removed,
          pass in 0 if it shouldn't be removed
        */
        daysUntilExpiration: number;
        successCallback: IStorePdfAsLocalFileSuccessFn;
        failureCallback: IStorePdfAsLocalFileFailureFn;
        callbackIdentifier?: string;
    }

}
