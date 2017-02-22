module dk {

    export interface ICustomer {
        ref: string;
        name: string;
        region: string;
        segment: string;
        status: string;
        email?: string;
    }


    export interface IGetCurrentSessionResponse extends IBasicResponse {
        /** the id of the session */
        sessionId: string;
        customer: ICustomer;
    }

    /**
    @param result a json stringified IGetCurrentSessionResponse object,
    so you'll need to parse the json before accessing the IGetCurrentSessionResponse properties
    */
    export interface IGetCurrentSessionSuccessFn {
        (result: string): null;
    }

    /**
    @param result is a json stringified IBasicResponse object
    */
    export interface IGetCurrentSessionFailureFn {
        (result: string): null;
    }

    export interface IGetCurrentSessionRequest {
        successCallback: IGetCurrentSessionSuccessFn;
        failureCallback: IGetCurrentSessionFailureFn;
        callbackIdentifier?: string;
    }
}
