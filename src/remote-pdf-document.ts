module dk {

    /**
      It's important to note that this success function is not always called,
      because the webview may have disappeared.
      @param result is a message confirming the document was opened
    */
    export interface IShowRemotePdfDocumentSuccessFn {
        (result: string): null;
    }

    /**
      It's important to note that this failure function is not always called,
      because the webview may have disappeared.
      @param result is an error message
    */
    export interface IShowRemotePdfDocumentFailureFn {
        (result: string): null;
    }


    export interface IShowRemotePdfDocumentRequest {
        /** The url of the pdf document */
        url: string;
        /** The page to open */
        pageNumber: number;
        /**
          Indicates if file can be added to account hub.
          Default value will depend on publication from which the document is opened
        */
        canBeShared?: boolean;
        /**
          Indicates if annotations option needs to be available
          Default value is true
        */
        canAnnotate?: boolean;
        successCallback: IShowRemotePdfDocumentSuccessFn;
        failureCallback: IShowRemotePdfDocumentFailureFn;
        /** callbackIdentifier allows you to distinguish between different callbacks */
        callbackIdentifier: string;
    }
}
