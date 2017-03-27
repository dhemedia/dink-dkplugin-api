module dk {

    /**
      It's important to note that this success function is not always called,
      so do not rely on it
      @param result is a json stringified IBasicResponse object
    */
    export interface ICloseCurrentPublicationSuccessFn {
        (result: string): null;
    }

    /**
      It's important to note that this failure function is not always called,
      so do not rely on it
      @param result is a json stringified IBasicResponse object
    */
    export interface ICloseCurrentPublicationFailureFn {
        (result: string): null;
    }

    export interface ICloseCurrentPublicationRequest {
        successCallback: ICloseCurrentPublicationSuccessFn;
        failureCallback: ICloseCurrentPublicationFailureFn;
        /** callbackIdentifier allows you to distinguish between different callbacks */
        callbackIdentifier?: string;
    }
}
