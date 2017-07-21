module dk {

    /**
    @param result a json stringified IBasicResponse object,
    so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface IStartPreparationRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IStartPreparationRequestFailureFn {
        (result: string): null;
    }

    export interface IStartPreparationRequest {
        successCallback: IStartPreparationRequestSuccessFn;
        failureCallback: IStartPreparationRequestFailureFn;
        callbackIdentifier?: string;
        regardingId: string;
        dinkRegardingEntityName: string;
        subject?: string;
        comments?: string;
    }

}
