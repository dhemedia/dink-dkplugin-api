module dk {

    export interface IGetPreparationResponse extends IBasicResponse {
        preparedMeeting: IPreparedMeeting;
    }

    /**
    @param result a json stringified IGetPreparationResponse object,
    so you'll need to parse the json before accessing the IGetPreparationResponse properties
    */
    export interface IGetPreparationRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetPreparationRequestFailureFn {
        (result: string): null;
    }

    export interface IGetPreparationRequest {
        successCallback: IGetPreparationRequestSuccessFn;
        failureCallback: IGetPreparationRequestFailureFn;
        callbackIdentifier?: string;
        regardingId: string;
        dinkRegardingEntityName: string;
    }

}
