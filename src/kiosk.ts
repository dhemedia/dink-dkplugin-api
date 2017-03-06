module dk {

    export enum OpenKioskFailureErrorCode {
        NOT_FOUND = <any>'NOT_FOUND'
    }

    export interface IOpenKioskFailureResponse extends IBasicResponse {
        /** The error code */
        code: OpenKioskFailureErrorCode;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IOpenKioskSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IOpenKioskFailureResponse object
    */
    export interface IOpenKioskFailureFn {
        (result: string): null;
    }

    export interface IOpenKioskRequest {
        /** The key/reference of the target kiosk */
        kioskKey?: string;
        /** The name of the target kiosk, is required when kioskKey is missing*/
        kioskName?: string;
        successCallback: IOpenKioskSuccessFn;
        failureCallback: IOpenKioskFailureFn;
        /** callbackIdentifier allows you to distinguish between different callbacks */
        callbackIdentifier?: string;
    }
}
