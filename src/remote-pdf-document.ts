module dk {

    /**
      It's important to note that this success function is not always called,
      because the webview may have disappeared.
    */

    export interface IShowRemotePdfDocumentSuccessFn {
        /**
          The result is a message confirming the document was opened.
        */
        (result: string): null;
    }

    /**
      It's important to note that this failure function is not always called,
      because the webview may have disappeared.
    */
    export interface IShowRemotePdfDocumentFailureFn {
        /**
          The result is an error message
        */
        (result: string): null;
    }


    export interface IShowRemotePdfDocumentRequest {
        /** The url of the pdf document */
        url: string;
        /** The page to open */
        pageNumber: number;
        successCallback: IShowRemotePdfDocumentSuccessFn;
        failureCallback: IShowRemotePdfDocumentFailureFn;
        /** callbackIdentifier allows you to distinguish between different callbacks */
        callbackIdentifier: string;
    }
}
