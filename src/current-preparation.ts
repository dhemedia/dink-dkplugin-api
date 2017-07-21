module dk {

    export interface IGetCurrentPreparationResponse extends IBasicResponse {
        preparedMeeting: IPreparedMeeting;
    }

    /**
    @param result a json stringified IGetCurrentPreparationResponse object,
    so you'll need to parse the json before accessing the IGetCurrentPreparationResponse properties
    */
    export interface IGetCurrentPreparationRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetCurrentPreparationRequestFailureFn {
        (result: string): null;
    }

    export interface IGetCurrentPreparationRequest {
        successCallback: IGetCurrentPreparationRequestSuccessFn;
        failureCallback: IGetCurrentPreparationRequestFailureFn;
        callbackIdentifier?: string;
    }

}
