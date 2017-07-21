module dk {

    /**
    @param result a json stringified IBasicResponse object,
    so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface IAddOrUpdateRelatedEntityRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IAddOrUpdateRelatedEntityRequestFailureFn {
        (result: string): null;
    }

    export interface IAddOrUpdateRelatedEntityRequest {
        successCallback: IAddOrUpdateRelatedEntityRequestSuccessFn;
        failureCallback: IAddOrUpdateRelatedEntityRequestFailureFn;
        callbackIdentifier?: string;
        id: string;
        dinkEntityName: string;
        regardingId: string;
        dinkRegardingEntityName: string;
        localId: string;
        /** Data that will be used to create a local copy */
        record: Object,
        /** Data that will be sent to the server */
        data: Object,
        refreshRegardingId?: string;
        refreshDinkRegardingEntityName?: string;
    }

}
