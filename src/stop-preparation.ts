module dk {

    /**
    @param result a json stringified IBasicResponse  object,
    so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface IStopPreparationRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IStopPreparationRequestFailureFn {
        (result: string): null;
    }

    export interface IStopPreparationRequest {
        successCallback: IStopPreparationRequestSuccessFn;
        failureCallback: IStopPreparationRequestFailureFn;
        callbackIdentifier?: string;
    }

}
