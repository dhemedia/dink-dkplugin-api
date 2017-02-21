module dk {

    export interface IGenerateImageFromScreenCaptureResponse extends IBasicResponse {
        /** path is the absolute path to the image that was created */
        path: string;
    }

    /**
    @param result a json stringified IGenerateImageFromScreenCaptureResponse object
    */
    export interface IGenerateImageFromScreenCaptureSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGenerateImageFromScreenCaptureFailureFn {
        (result: string): null;
    }

    export interface IGenerateImageFromScreenCaptureRequest {
        successCallback: IGenerateImageFromScreenCaptureSuccessFn;
        failureCallback: IGenerateImageFromScreenCaptureFailureFn;
        callbackIdentifier?: string;
    }
}
