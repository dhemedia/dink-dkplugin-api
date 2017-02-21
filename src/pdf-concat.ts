module dk {

    export interface IConcatPdfResponse extends IBasicResponse {
        /** the name of the pdf document that was created */
        name: string;
    }
    /**
    @param result a json stringified IConcatPdfResponse object,
    so you'll need to parse the json before accessing the IConcatPdfResponse properties
    */
    export interface IConcatPdfSuccessFn {
        (result: string): null;
    }

    /**
    @param result is a json stringified IBasicResponse object
    */
    export interface IConcatPdfFailureFn {
        (result: string): null;
    }

    export interface IConcatPdfRequest {
        successCallback: IConcatPdfSuccessFn;
        failureCallback: IConcatPdfFailureFn;
        /** the file names of the documents you want to concat*/
        fileNames: string[];
        requestedName?: string;
        callbackIdentifier?: string;
    }
}
