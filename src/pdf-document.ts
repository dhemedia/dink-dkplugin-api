module dk {

    /**
      It's important to note that this success function is not always called,
      because the webview may have disappeared.
      @param result is a message confirming the document was opened.
    */
    export interface IShowPdfDocumentSuccessFn {
        (result: string): null;
    }

    /**
      @param result is an error message
    */
    export interface IShowPdfDocumentFailureFn {
        (result: string): null;
    }
}
