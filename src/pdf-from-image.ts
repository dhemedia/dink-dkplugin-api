module dk {

    export interface IGeneratePdfFromImageResponse extends IBasicResponse {
        /** the name of the pdf document that was created */
        name: string;
    }

    /**
    @param result a json stringified IGeneratePdfFromImageResponse object,
    so you'll need to parse the json before accessing the IGeneratePdfFromImageResponse properties
    */
    export interface IGeneratePdfFromImageSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGeneratePdfFromImageFailureFn {
        (result: string): null;
    }

    export interface IGeneratePdfFromImageRequest {
        successCallback: IGeneratePdfFromImageSuccessFn;
        failureCallback: IGeneratePdfFromImageFailureFn;
        /** the absolute path to the image*/
        imagePath: string;
        /** the name you would like to have as a file name for the new image*/
        requestedName?: string;
        callbackIdentifier?: string;
    }
}
