module dk {

    export interface IGetFileContentsResponse extends IBasicResponse {
        /** plain text contents if .json or .txt,
        base64-encoded contents if .png or .jpg
        */
        content: string;
    }

    /**
    @param result a json stringified IGetFileContentsResponse object,
    so you'll need to parse the json before accessing the IGetFileContentsResponse properties
    */
    export interface IGetFileContentsRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetFileContentsRequestFailureFn {
        (result: string): null;
    }

    export interface IGetFileContentsRequest {
        successCallback: IGetFileContentsRequestSuccessFn;
        failureCallback: IGetFileContentsRequestFailureFn;
        callbackIdentifier?: string;
        /**
          The absolute path to the file, as given
          by DKPlugin.getLocalFile or DKPlugin.getFile
        */
        path: string;
    }

}
