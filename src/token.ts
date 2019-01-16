module dk {

    export interface IAuthTokenResponse extends IBasicResponse {
        /** token to use as Bearer token */
        token: string;
        /** token lifetime in seconds */
        expiresIn: number;
    }

    /**
      @param result a json stringified IAuthTokenResponse object,
      so you'll need to parse the json before accessing the IAuthTokenResponse properties
    */
    export interface IAuthTokenSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IAuthTokenFailureFn {
        (result: string): null;
    }

    export interface IAuthTokenRequest {
        successCallback: IAuthTokenSuccessFn;
        failureCallback: IAuthTokenFailureFn;
        callbackIdentifier?: string;
    }
}