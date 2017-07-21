module dk {

    /**
    @param result a json stringified IBasicResponse object,
    so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface ISetCrmOfflineEntityRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface ISetCrmOfflineEntityRequestFailureFn {
        (result: string): null;
    }

    export interface ISetCrmOfflineEntityRequest {
        successCallback: ISetCrmOfflineEntityRequestSuccessFn;
        failureCallback: ISetCrmOfflineEntityRequestFailureFn;
        callbackIdentifier?: string;
        dinkEntityName: string;
        /** The id of the entity */
        id: string;
        /** The data for the entity */
        data: Object;
    }

}
